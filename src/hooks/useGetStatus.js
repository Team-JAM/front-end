import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';
import { sleep } from '../utils/sleep';

export const useGetStatus = () => {
	const { dispatch } = useDataContext();

	const getPlayerStatus = async (cooldown = 0) => {
		dispatch({ type: 'GET_DATA_START' });

		if (cooldown) await sleep(cooldown);

		try {
			const res = await axiosWithAuth().post('/adv/status/');

			dispatch({ type: 'GET_STATUS_SUCCESS', payload: res.data });

			return res.data.cooldown;
		} catch (err) {
			console.log(err);
			dispatch({ type: 'GET_DATA_FAILURE' });
		}
	};

	return getPlayerStatus;
};
