import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';

export const useGetStatus = () => {
	const { dispatch } = useDataContext();

	const getPlayerStatus = async () => {
		dispatch({ type: 'GET_DATA_START' });

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
