import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';

export default function ButtonCarry({ item, inInventory }) {
	const {
		data: { playerStatus },
		dispatch,
	} = useDataContext();

	const canCarry = playerStatus.abilities.includes('carry');

	const handleCarry = name => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/adv/carry', { name })
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
			{inInventory && canCarry && (
				<button onClick={() => handleCarry(item)}>Carry</button>
			)}
		</>
	);
}
