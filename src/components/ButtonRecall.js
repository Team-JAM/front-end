import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';

export default function ButtonRecall() {
	const {
		data: { playerStatus, warpMode },
		dispatch,
	} = useDataContext();

	const canRecall = playerStatus.abilities.includes('recall');

	const handleRecall = () => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/adv/recall/')
			.then(res => {
				// console.log(res.data);
				if (warpMode) {
					// localStorage.setItem('warp_mode', false);
					dispatch({ type: 'TOGGLE_WARP_MODE ' });
				}

				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	};

	return <>{canRecall && <button onClick={handleRecall}>Recall</button>}</>;
}
