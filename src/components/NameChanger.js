import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { useDataContext } from '../contexts/DataContext';

export default function NameChanger() {
	const {
		data: { roomData },
		dispatch,
	} = useDataContext();
	const [newName, setNewName] = useState('');

	const handleChange = e => setNewName(e.target.value);

	const handleClick = () => {
		// console.log(newName);
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/change_name', { name: newName, confirm: 'aye' })
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
			{roomData.room_id === 467 && (
				<div>
					<input
						type='text'
						name='newName'
						placeholder='Enter your new name'
						value={newName}
						onChange={handleChange}
					/>
					<button onClick={handleClick}>Submit</button>
				</div>
			)}
		</div>
	);
}
