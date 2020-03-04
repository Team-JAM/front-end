import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';
import { specialRooms } from '../data/specialRooms';

export default function ButtonTransmogrify({ item }) {
	const {
		data: { roomData },
		dispatch,
	} = useDataContext();

	const handleClick = name => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/adv/transmogrify/', { name })
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
			{roomData.room_id === specialRooms['The Transmogriphier'] && (
				<button onClick={() => handleClick(item)}>Transmogrify</button>
			)}
		</div>
	);
}
