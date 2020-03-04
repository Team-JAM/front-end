import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';
import { specialRooms } from '../data/specialRooms';

export default function ButtonPrice({ item }) {
	const {
		data: { roomData },
		dispatch,
	} = useDataContext();

	const handlePrice = name => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/adv/sell', { name })
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
			{roomData.room_id === specialRooms['Shop'] && (
				<button onClick={() => handlePrice(item)}>Get Price</button>
			)}
		</>
	);
}
