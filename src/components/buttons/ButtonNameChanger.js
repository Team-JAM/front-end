import React, { useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useDataContext } from '../../contexts/DataContext';
import { useGetStatus } from '../../hooks/useGetStatus';
import { specialRooms } from '../../data/specialRooms';

export default function ButtonNameChanger() {
	const {
		data: { roomData },
		dispatch,
	} = useDataContext();

	const [newName, setNewName] = useState('');

	const getStatus = useGetStatus();

	const handleChange = e => setNewName(e.target.value);

	const handleClick = () => {
		dispatch({ type: 'GET_DATA_START' });

		(async () => {
			try {
				const res = await axiosWithAuth().post('/adv/change_name/', {
					name: newName,
					confirm: 'aye',
				});
				// console.log(res.data);
				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });

				getStatus(res.data.cooldown);
			} catch (err) {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			}
		})();
	};

	return (
		<div>
			{roomData.room_id === specialRooms["Pirate Ry's"] && (
				<>
					<input
						type='text'
						name='newName'
						placeholder='Enter your new name'
						value={newName}
						onChange={handleChange}
					/>
					<button onClick={handleClick}>Submit</button>
				</>
			)}
		</div>
	);
}
