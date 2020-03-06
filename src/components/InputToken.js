import React, {
	// useState,
	useEffect,
} from 'react';
import { useGetRoomData, useGetStatus, useGetBalance } from '../hooks';
import { sleep } from '../utils/sleep';

export default function InputToken() {
	// const [token, setToken] = useState(localStorage.getItem('token'));

	const getRoomData = useGetRoomData();
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
