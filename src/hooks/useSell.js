import { useDataContext } from '../contexts/DataContext';
import { axiosWithAuth } from '../utils/axiosWithAuth';
// import { useGetStatus } from '../hooks/useGetStatus';

export const useSell = () => {
	const { dispatch } = useDataContext();

	// const getStatus = useGetStatus();

	const sell = async item => {
		dispatch({ type: 'GET_DATA_START' });

		try {
			const res = await axiosWithAuth().post('/adv/sell', {
				name: item,
				confirm: 'yes',
			});

			dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
			return res.data.cooldown;
		} catch (err) {
			console.log(err);
			dispatch({ type: 'GET_DATA_FAILURE' });
		}
	};

	return sell;
};
