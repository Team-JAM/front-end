import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';
import { sleep } from '../utils/sleep';

export const useWarp = () => {
	const { dispatch } = useDataContext();

	const warp = async (cooldown = 0) => {
		dispatch({ type: 'GET_DATA_START' });

		if (cooldown) await sleep(cooldown);

		try {
			const res = await axiosWithAuth().post('/adv/warp/');
			// console.log(res);

			dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
			dispatch({
				type: 'SET_SHADOW_WORLD_STATUS',
				payload: res.data.room_id < 500 ? false : true,
			});

			return res.data.cooldown;
		} catch (err) {
			console.log(err);
			dispatch({ type: 'GET_DATA_FAILURE' });
		}
	};

	return warp;
};
