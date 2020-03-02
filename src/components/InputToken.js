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

	// const handleSelect = e => {
	// 	console.log(e.target.value);
	// 	setToken(e.target.value);
	// 	localStorage.setItem('token', e.target.value);
	// 	getInitData();
	// 	getStatus();
	// };

	return (
		<div>
			{/* <select id='players' name='players' onChange={handleSelect}>
				<option>Please select a player:</option>
				<option value={process.env.ALLISON_TOKEN}>Allison</option>
				<option value={process.env.JONATHAN_TOKEN}>Jonathan</option>
				<option value={process.env.MATTHEW_TOKEN}>Matthew</option>
			</select> */}
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
