import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';
import { sleep } from '../utils/sleep';

export const useGetRoomData = () => {
	const { dispatch } = useDataContext();

	const getRoomData = async (cooldown = 0) => {
		dispatch({ type: 'GET_DATA_START' });

		if (cooldown) await sleep(cooldown);

		try {
			const res = await axiosWithAuth().get('/adv/init/');

			dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
			// console.log(res.data.room_id);

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

	return getRoomData;
};
