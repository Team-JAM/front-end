import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';

export default function ButtonTakeDrop({ item, action }) {
	const { dispatch } = useDataContext();

	const handleTakeDrop = name => {
		dispatch({ type: 'GET_DATA_START' });

		const actionLC = action.toLowerCase();

		axiosWithAuth()
			.post(`/adv/${actionLC}`, { name })
			.then(res => {
				// console.log(res.data);
				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
				const message = res.data.messages[0];

				if (actionLC === 'take') {
					const item = message.split('You have picked up ')[1];
					dispatch({ type: 'TAKE_ITEM', payload: item });
				} else if (actionLC === 'drop') {
					const item = message.split('You have dropped ')[1];
					dispatch({ type: 'DROP_ITEM', payload: item });
				}
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	};

	return <button onClick={() => handleTakeDrop(item)}>{action}</button>;
}
