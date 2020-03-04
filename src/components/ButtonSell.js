import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';
import { specialRooms } from '../data/specialRooms';

export default function ButtonSell({ item }) {
	const {
		data: { roomData },
		dispatch,
	} = useDataContext();

	const handleSell = name => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/adv/sell', { name, confirm: 'yes' })
			.then(res => {
				// console.log(res.data);
				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
				dispatch({ type: 'DROP_ITEM', payload: item });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	};

	return (
		<>
			{roomData.room_id === specialRooms['Shop'] && (
				<button onClick={() => handleSell(item)}>Sell Item</button>
			)}
		</>
	);
}
