import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';
import { sleep } from '../utils/sleep';

export const useWarp = () => {
	const { dispatch } = useDataContext();

	const warp = async (cooldown = 0) => {
		dispatch({ type: 'GET_DATA_START' });

		if (cooldown) await sleep(cooldown);

		try {
		} catch (err) {
			console.log(err);
			dispatch({ type: 'GET_DATA_FAILURE' });
		}
	};
};
