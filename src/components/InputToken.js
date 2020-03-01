import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { useDataContext } from '../contexts/DataContext';

export default function InputToken() {
	const { dispatch } = useDataContext();
	const [token, setToken] = useState(localStorage.getItem('token'));

	const getInitData = () => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.get('/adv/init')
			.then(res => {
				// console.log(res.data);
				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	};

	useEffect(() => {
		if (localStorage.getItem('token')) {
			getInitData();
		}
	}, []);

	const handleChange = e => setToken(e.target.value);

	const handleClick = () => {
		localStorage.setItem('token', token);
		getInitData();
	};

	return (
		<div>
			<input
				type='text'
				name='token'
				placeholder='Enter token'
				value={token}
				onChange={handleChange}
			/>
			<button onClick={handleClick}>Set Token</button>
		</div>
	);
}
