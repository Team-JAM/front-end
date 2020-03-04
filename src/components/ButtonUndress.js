import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';

export default function ButtonUndress({ item }) {
	const {
		data: { cooldownOver },
		dispatch,
	} = useDataContext();

	const handleUndress = name => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post(`/adv/undress/`, { name })
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
			{cooldownOver && (
				<button onClick={() => handleUndress(item)}>Undress</button>
			)}
		</>
	);
}
