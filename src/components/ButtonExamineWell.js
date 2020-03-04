import React from 'react';
// import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';
import { useDataContext } from '../contexts/DataContext';
import { specialRooms } from '../data/specialRooms';

export default function ButtonExamineWell() {
	const {
		data: { roomData },
		dispatch,
	} = useDataContext();

	const handleClick = () => {
		dispatch({ type: 'GET_DATA_START' });

		axios
			.post('https://team-jam-api.herokuapp.com/api/well', {
				token: localStorage.getItem('token'),
			})
			.then(res => {
				// console.log(res.data.message);
				// console.log(res.data.room);
				dispatch({ type: 'EXAMINE_ITEM_SUCCESS', payload: res.data.room });
				dispatch({
					type: 'GET_MINING_ROOM_SUCCESS',
					payload: res.data.message,
				});
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});

		// axiosWithAuth()
		// 	.post('/adv/examine/', { name: 'well' })
		// 	.then(res => {
		// 		console.log(res.data);
		// 		dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
		// 	})
		// 	.catch(err => {
		// 		console.log(err);
		// 		dispatch({ type: 'GET_DATA_FAILURE' });
		// 	});
	};

	return (
		<div>
			{(roomData.room_id === specialRooms['Wishing Well'] ||
				roomData.room_id === specialRooms['Underworld Wishing Well']) && (
				<button onClick={handleClick}>Examine Well</button>
			)}
		</div>
	);
}
