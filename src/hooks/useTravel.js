import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';
import { axiosTeamJamBackEnd } from '../utils/axiosTeamJamBackEnd';
import { useRecall } from './useRecall';
import { useWarp } from './useWarp';
import { sleep } from '../utils/sleep';

export const useTravel = () => {
	const {
		data: { roomData },
		dispatch,
	} = useDataContext();
	const recall = useRecall();
	const warp = useWarp();

	const travel = async destination_room => {
		try {
			const res = await axiosTeamJamBackEnd().post('/get_directions/', {
				starting_room: roomData.room_id,
				destination_room,
			});
			console.log(res.data);

			const path = res.data.path.map(room => Number(room[1]));

			dispatch({
				type: 'SET_PATH',
				payload: { destination: path[path.length - 1], path },
			});

			dispatch({ type: 'SET_TRAVEL_MODE_TRUE' });

			const directions = res.data.path_directions;

			for (const direction of directions) {
				const cooldown = await handleDirection(direction);
				await sleep(cooldown);
			}

			// const asyncList = [];

			// for (const direction of directions) {
			// 	const asyncFunction = async () => {
			// 		const cooldown = await handleDirection(direction);
			// 		return cooldown;
			// 	};

			// 	asyncList.push(asyncFunction);
			// }

			// for (const asyncFunction of asyncList) {
			// 	const cooldown = await asyncFunction();
			// 	await sleep(cooldown);
			// }

			dispatch({ type: 'SET_TRAVEL_MODE_FALSE' });
			dispatch({ type: 'CLEAR_DESTINATION' });
		} catch (err) {
			console.log(err);
			dispatch({ type: 'GET_DATA_FAILURE' });
		}
	};

	const handleDirection = async directions => {
		try {
			if (directions[0] === 'fly' || directions[0] === 'move') {
				dispatch({ type: 'GET_DATA_START' });
				const [endpoint, direction, next_room_id] = directions;

				const res = await axiosWithAuth().post(`/adv/${endpoint}/`, {
					direction,
					next_room_id,
				});

				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });

				return res.data.cooldown;
			} else if (directions[0] === 'dash') {
				dispatch({ type: 'GET_DATA_START' });

				const [endpoint, direction, num_rooms, next_room_ids] = directions;

				const res = await axiosWithAuth().post(`/adv/${endpoint}/`, {
					direction,
					num_rooms,
					next_room_ids,
				});

				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });

				return res.data.cooldown;
			} else if (directions[0] === 'recall') return recall();
			else if (directions[0] === 'warp') return warp();
		} catch (err) {
			console.log(err);
			dispatch({ type: 'GET_DATA_FAILURE' });
		}
	};

	return travel;
};
