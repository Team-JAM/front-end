import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';
import { axiosTeamJamBackEnd } from '../utils/axiosTeamJamBackEnd';
import { sleep } from '../utils/sleep';
import { useGetStatus } from '../hooks';

export const useTravelTreasure = () => {
	const {
		data: { roomData },
		dispatch,
	} = useDataContext();

	const getStatus = useGetStatus();

    // keep track of encumbrance
    // let encumbrance = playerStatus.encumbrance
    // const max_encumbrance = playerStatus.strength - 1

	const travelTreasure = async destination_room => {
		try {
            // fetch path to target room
			const res = await axiosTeamJamBackEnd().post('/path_no_warp/', {
				starting_room: roomData.room_id,
				destination_room,
			});
			// console.log(res.data);

			const path = res.data.path.map(room => Number(room[1]));

			dispatch({
				type: 'SET_PATH',
				payload: { destination: path[path.length - 1], path },
			});

			dispatch({ type: 'SET_TRAVEL_MODE_TRUE' });

			const directions = res.data.path;

            // travel along path, picking up items along the way
            // path_loop:
                for (const direction of directions) {
                    const data = await handleDirection(direction);
                    await sleep(data.cooldown);

                    if (data.items.length > 0) {
                        for (let item of data.items) {
                            // stop walking if too encumbered
                            // if (encumbrance >= max_encumbrance) {
                            //     break path_loop;
                            // }
                            try {
                                const res = await axiosWithAuth().post('adv/take', { name: item })
                                dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
                                // encumbrance += res.data.weight
                                await sleep(res.data.cooldown)

                                
                            } catch (err) {
                                console.log(err);
                                dispatch({ type: 'GET_DATA_FAILURE' });
                            }
                        }
                    }
                }

			dispatch({ type: 'SET_TRAVEL_MODE_FALSE' });
			dispatch({ type: 'CLEAR_DESTINATION' });

			const cooldown = await getStatus();
			await sleep(cooldown)

		} catch (err) {
			console.log(err);
			dispatch({ type: 'GET_DATA_FAILURE' });
			dispatch({ type: 'SET_TRAVEL_MODE_FALSE' });
		}
	};

	const handleDirection = async directions => {
		try {
			const [direction, next_room_id] = directions;

			console.log(directions)

			const res = await axiosWithAuth().post(`/adv/fly/`, {
				direction,
				next_room_id: `${next_room_id}`,
			});
			// console.log(res);

			dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });

			return res.data;
		} catch (err) {
			console.log(err);
			dispatch({ type: 'GET_DATA_FAILURE' });
			dispatch({ type: 'SET_TRAVEL_MODE_FALSE' });
		}
	};

	return travelTreasure;
};
