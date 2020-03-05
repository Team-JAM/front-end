import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';
import { specialRooms } from '../data/specialRooms';

export default function ButtonBuyDonut() {
	const {
		data: { roomData },
		dispatch,
	} = useDataContext();

	const handleClick = () => {
		// console.log(newName);
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/adv/buy/', { name: 'donut', confirm: 'yes' })
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
		<div>
			{roomData.room_id === specialRooms['JKMT Donuts'] && (
				<button onClick={handleClick}>Buy Donut</button>
			)}
		</div>
	);
}
