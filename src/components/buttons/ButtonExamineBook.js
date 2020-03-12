import React from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useDataContext } from '../../contexts/DataContext';
import { specialRooms } from '../../data/specialRooms';

export default function ButtonExamineBook() {
	const {
		data: { roomData },
		dispatch,
	} = useDataContext();

	const handleClick = () => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/adv/examine/', { name: 'book' })
			.then(res => {
				console.log(res.data);
				dispatch({ type: 'EXAMINE_ITEM_SUCCESS', payload: res.data });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	};

	return (
		<div>
			{roomData.room_id === specialRooms["Arron's Athenaeum"] && (
				<button onClick={handleClick}>Examine Book</button>
			)}
		</div>
	);
}
