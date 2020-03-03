import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';

export default function ButtonExamine({ item }) {
	const { dispatch } = useDataContext();

	const handleExamine = name => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/adv/examine', { name })
			.then(res => {
				// console.log(res.data);
				dispatch({ type: 'EXAMINE_ITEM_SUCCESS', payload: res.data });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	};

	return <button onClick={() => handleExamine(item)}>Examine</button>;
}
