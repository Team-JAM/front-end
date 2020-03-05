import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';

export const useGetBalance = () => {
	const { dispatch } = useDataContext();

	const getBalance = async () => {
		dispatch({ type: 'GET_DATA_START' });

		try {
			const res = await axiosWithAuth().get('/bc/get_balance');

			dispatch({ type: 'GET_BALANCE_SUCCESS', payload: res.data.messages[0] });

			return res.data.cooldown;
		} catch (err) {
			console.log(err);
			dispatch({ type: 'GET_DATA_FAILURE' });
		}
	};

	return getBalance;
};
