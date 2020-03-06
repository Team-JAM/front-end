import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';
import { sleep } from '../utils/sleep';

export const useRecall = () => {
	const {
		data: { inShadowWorld },
		dispatch,
	} = useDataContext();

	const recall = async (cooldown = 0) => {
		dispatch({ type: 'GET_DATA_START' });

		if (cooldown) await sleep(cooldown);

		try {
			const res = await axiosWithAuth().post('/adv/recall/');
			// console.log(res);

			if (inShadowWorld)
				dispatch({ type: 'SET_SHADOW_WORLD_STATUS', payload: false });

			dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
		} catch (err) {
			console.log(err);
			dispatch({ type: 'GET_DATA_FAILURE' });
		}
	};

	return recall;
};
