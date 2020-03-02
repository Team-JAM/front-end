import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { useDataContext } from '../contexts/DataContext';

export default function InputToken() {
	const { dispatch } = useDataContext();
	const [token, setToken] = useState(localStorage.getItem('token'));

	const getInitData = () => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.get('/init')
			.then(res => {
				// console.log(res.data);
				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	};

	const getStatus = () => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/status')
			.then(res => {
				// console.log(res.data);
				dispatch({ type: 'GET_STATUS_SUCCESS', payload: res.data });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	};

	useEffect(() => {
		if (localStorage.getItem('token')) {
			getInitData();
			getStatus();
		}
	}, []);

	const handleChange = e => setToken(e.target.value);

	const handleClick = () => {
		localStorage.setItem('token', token);
		getInitData();
		getStatus();
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
