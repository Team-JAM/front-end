import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { useDataContext } from '../contexts/DataContext';

export default function Item({ item, action }) {
	const {
		data: { cooldownOver },
		dispatch,
	} = useDataContext();

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

	const handleTakeDrop = name => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post(`/adv/${action}`, { name })
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
		<li>
			{item}
			{cooldownOver && (
				<>
					<button onClick={() => handleExamine(item)}>Examine</button>
					<button onClick={() => handleTakeDrop(item)}>{action}</button>
				</>
			)}
		</li>
	);
}
