import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { useDataContext } from '../contexts/DataContext';

export default function ButtonExamineWell() {
	const {
		data: { roomData },
		dispatch,
	} = useDataContext();

	const handleClick = () => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/adv/examine/', { name: 'well' })
			.then(res => {
				console.log(res.data);
				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	};

	return (
		<div>
			{roomData.room_id === 55 && (
				<button onClick={handleClick}>Examine Well</button>
			)}
		</div>
	);
}
