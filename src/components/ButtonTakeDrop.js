import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';
import { useGetStatus } from '../hooks/useGetStatus';

// The component handles both Taking and Dropping an item, depending on the action specified
export default function ButtonTakeDrop({ item, action }) {
	const { dispatch } = useDataContext();

	const getStatus = useGetStatus();

	const handleTakeDrop = name => {
		dispatch({ type: 'GET_DATA_START' });

		const actionLC = action.toLowerCase();

		(async () => {
			try {
				const res = await axiosWithAuth().post(`/adv/${actionLC}`, { name });
				// console.log(res.data);
				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });

				getStatus(res.data.cooldown);
			} catch (err) {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			}
		})();
	};

	return <button onClick={() => handleTakeDrop(item)}>{action}</button>;
}
