import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';
import { axiosTeamJamBackEnd } from '../utils/axiosTeamJamBackEnd';
import { useMove } from './useMove';
import { useRecall } from './useRecall';
import { useWarp } from './useWarp';
import { sleep } from '../utils/sleep';

export const useTravel = () => {
	const {
		data: { roomData },
		dispatch,
	} = useDataContext();

	// Access axios calls for movements from other custom hooks
	const move = useMove();

	const recall = useRecall();

	const warp = useWarp();

	const travel = async destination_room => {
		try {
			const res = await axiosTeamJamBackEnd().post('/get_directions/', {
				starting_room: roomData.room_id,
				destination_room,
			});
			// console.log(res.data.path);

			const path = res.data.path.map(room => Number(room[1]));
			const wormholePaths = res.data.path.filter(room => room[0] === 'warp');

			// Update Context state with wormholes for rendering
			if (wormholePaths) {
				const wormholeRooms = wormholePaths.map(room => Number(room[1]));

				dispatch({
					type: 'SET_WORMHOLE_ROOMS',
					payload: wormholeRooms,
				});
			}

			// Update Context state with path for rendering
			dispatch({
				type: 'SET_PATH',
				payload: { destination: path[path.length - 1], path },
			});

			dispatch({ type: 'SET_TRAVEL_MODE_TRUE' });

			const directions = res.data.path_directions;

			// Iterate through directions include appropriate cooldown period in between axios calls
			for (const direction of directions) {
				const cooldown = await handleDirection(direction);
				await sleep(cooldown);
			}

			// Update Context state to remove travel path render
			dispatch({ type: 'SET_TRAVEL_MODE_FALSE' });
			dispatch({ type: 'CLEAR_DESTINATION' });
		} catch (err) {
			console.log(err);
			dispatch({ type: 'GET_DATA_FAILURE' });
		}
	};

	// Make appropriate axios call depending on direction given/
	const handleDirection = async directions => {
		try {
			// handle Move or Fly directions (from custom hook)
			if (directions[0] === 'fly' || directions[0] === 'move') {
				const [endpoint, direction, next_room_id] = directions;

				return move(endpoint, direction, next_room_id);
				// handle Dash directions (not from custom hook)
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
				// handle Recall directions (from custom hook)
			} else if (directions[0] === 'recall') return recall();
			// handle Warp directions (from custom hook)
			else if (directions[0] === 'warp') return warp();
		} catch (err) {
			console.log(err);
			dispatch({ type: 'GET_DATA_FAILURE' });
		}
	};

	return travel;
};
