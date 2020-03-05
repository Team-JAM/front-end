import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';
import { useGetStatus } from '../hooks/useGetStatus';

export default function ButtonCarry({ item, inInventory }) {
	const {
		data: { playerStatus },
		dispatch,
	} = useDataContext();
	const getStatus = useGetStatus();

	const canCarry = playerStatus.abilities.includes('carry');

	const handleCarry = name => {
		dispatch({ type: 'GET_DATA_START' });

		(async () => {
			try {
				const res = await axiosWithAuth().post('/adv/carry/', { name });
				// console.log(res.data);
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
			{inInventory && canCarry && (
				<button onClick={() => handleCarry(item)}>Carry</button>
			)}
		</>
	);
}
