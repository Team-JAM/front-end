import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';

export default function ButtonReceive() {
	const {
		data: { cooldownOver, playerStatus },
		dispatch,
	} = useDataContext();

	const ghostCarrying =
		playerStatus.status[0] && playerStatus.status[0].includes('Glasowyn');

	const handleReceive = () => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/adv/receive')
			.then(res => {
				// console.log(res.data);
				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	};

	return (
		<>
			{cooldownOver && ghostCarrying && (
				<button onClick={handleReceive}>Receive</button>
			)}
		</>
	);
}
