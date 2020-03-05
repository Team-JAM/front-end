import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';
import { sleep } from '../utils/sleep';

export const useGetBalance = () => {
	const { dispatch } = useDataContext();

	const getBalance = async (cooldown = 0) => {
		dispatch({ type: 'GET_DATA_START' });

		if (cooldown) await sleep(cooldown);

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
