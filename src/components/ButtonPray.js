import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';
import { useGetStatus } from '../hooks/useGetStatus';

export default function ButtonPray() {
	const { dispatch } = useDataContext();
	const getStatus = useGetStatus();

	const handlePray = () => {
		dispatch({ type: 'GET_DATA_START' });

		(async () => {
			try {
				const res = await axiosWithAuth().post('/adv/pray/');
				// console.log(res.data);
				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });

				getStatus(res.data.cooldown);
			} catch (err) {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			}
		})();
	};

	return <button onClick={handlePray}>Pray</button>;
}
