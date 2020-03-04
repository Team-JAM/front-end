import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';

export default function ButtonWear({ item, inInventory }) {
	const { dispatch } = useDataContext();

	const isWearable = item.includes('boots') || item.includes('jacket');

	const handleWear = name => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post(`/adv/wear/`, { name })
			.then(res => {
				// console.log(res.data);
				dispatch({ type: 'GET_STATUS_SUCCESS', payload: res.data });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	};

	return (
		<>
			{isWearable && inInventory && (
				<button onClick={() => handleWear(item)}>Wear</button>
			)}
		</>
	);
}
