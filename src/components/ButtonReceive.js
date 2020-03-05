import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';
import { useGetStatus } from '../hooks/useGetStatus';

export default function ButtonReceive() {
	const {
		data: { cooldownOver, playerStatus },
		dispatch,
	} = useDataContext();
	const getStatus = useGetStatus();

	const ghostCarrying =
		playerStatus.status[0] && playerStatus.status[0].includes('Glasowyn');

	const handleReceive = () => {
		dispatch({ type: 'GET_DATA_START' });

		(async () => {
			try {
				const res = await axiosWithAuth().post('/adv/receive/');
				// console.log(res);
				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });

				getStatus(res.data.cooldown);
			} catch (err) {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			}
		})();
	};

	return (
		<>
			{cooldownOver && ghostCarrying && (
				<button onClick={handleReceive}>Receive</button>
			)}
		</>
	);
}
