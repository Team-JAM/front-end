import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';

export default function ButtonRecall() {
	const {
		data: { playerStatus, inShadowWorld },
		dispatch,
	} = useDataContext();

	const canRecall = playerStatus.abilities.includes('recall');

	const handleRecall = () => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/adv/recall/')
			.then(res => {
				// console.log(res.data);
				if (inShadowWorld)
					dispatch({ type: 'SET_SHADOW_WORLD_STATUS', payload: false });

				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	};

	return <>{canRecall && <button onClick={handleRecall}>Recall</button>}</>;
}
