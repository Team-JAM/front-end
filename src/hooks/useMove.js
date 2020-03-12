import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';
import { sleep } from '../utils/sleep';

export const useMove = () => {
	const { dispatch } = useDataContext();

	const move = async (endpoint, direction, next_room_id, cooldown = 0) => {
		dispatch({ type: 'GET_DATA_START' });

		if (cooldown) await sleep(cooldown);

		try {
			const res = await axiosWithAuth().post(`/adv/${endpoint}/`, {
				direction,
				next_room_id,
			});
			// console.log(res);

			dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });

			return res.data.cooldown;
		} catch (err) {
			console.log(err);
			dispatch({ type: 'GET_DATA_FAILURE' });
		}
	};

	return move;
};
