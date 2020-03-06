import React, {
	// useState,
	useEffect,
} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';
import { useGetStatus } from '../hooks/useGetStatus';
import { useGetBalance } from '../hooks/useGetBalance';
import { sleep } from '../utils/sleep';

export default function InputToken() {
	const { dispatch } = useDataContext();
	// const [token, setToken] = useState(localStorage.getItem('token'));

	const getStatus = useGetStatus();

	const getBalance = useGetBalance();

	const getData = async () => {
		try {
			const asyncList = [getRoomData, getStatus, getBalance];

			for (const asyncFunction of asyncList) {
				const cooldown = await asyncFunction();
				await sleep(cooldown);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const getRoomData = async () => {
		dispatch({ type: 'GET_DATA_START' });

		try {
			const res = await axiosWithAuth().get('/adv/init/');

			dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });

			// console.log(res.data.room_id);

			dispatch({
				type: 'SET_SHADOW_WORLD_STATUS',
				payload: res.data.room_id < 500 ? false : true,
			});

			return res.data.cooldown;
		} catch (err) {
			console.log(err);
			dispatch({ type: 'GET_DATA_FAILURE' });
		}
	};

	useEffect(() => {
		if (localStorage.getItem('token')) {
			getData();
		}
	}, []);

	// const handleChange = e => setToken(e.target.value);

	// const handleClick = () => {
	// 	localStorage.setItem('token', token);
	// 	getInitData();
	// };

	const handleSelect = e => {
		console.log(e.target.value);
		// setToken(e.target.value);
		localStorage.setItem('token', e.target.value);
		getData();
	};

	return (
		<div>
			<select id='players' name='players' onChange={handleSelect}>
				<option>Please select a player:</option>
				<option value={process.env.REACT_APP_ALLISON_TOKEN}>Allison</option>
				<option value={process.env.REACT_APP_JONATHAN_TOKEN}>Jonathan</option>
				<option value={process.env.REACT_APP_MATTHEW_TOKEN}>Matthew</option>
			</select>
			{/* <input
				type='text'
				name='token'
				placeholder='Enter token'
				value={token}
				onChange={handleChange}
			/>
			<button onClick={handleClick}>Set Token</button> */}
		</div>
	);
}
