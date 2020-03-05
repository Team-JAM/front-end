import React, {
	// useState,
	useEffect,
} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';

export default function InputToken() {
	const { dispatch } = useDataContext();
	// const [token, setToken] = useState(localStorage.getItem('token'));

	const getData = async () => {
		try {
			const asyncList = [getRoomData, getPlayerStatus, getBalance];

			const sleep = ms =>
				new Promise(resolve => {
					setTimeout(resolve, ms);
				});

			for (const asyncFunction of asyncList) {
				const cooldown = await asyncFunction();
				await sleep(cooldown * 1000);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const getRoomData = async () => {
		dispatch({ type: 'GET_DATA_START' });

		try {
			// console.log('GET ROOM DATA');
			const res = await axiosWithAuth().get('/adv/init/');

			dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });

			// console.log(res.data.room_id);

			dispatch({
				type: 'SET_WARP_MODE',
				payload: res.data.room_id < 500 ? false : true,
			});

			return res.data.cooldown;
		} catch (err) {
			console.log(err);
			dispatch({ type: 'GET_DATA_FAILURE' });
		}
	};

	const getPlayerStatus = async () => {
		dispatch({ type: 'GET_DATA_START' });

		try {
			const res = await axiosWithAuth().post('/adv/status/');
			// localStorage.setItem('name', res.data.name)

			dispatch({ type: 'GET_STATUS_SUCCESS', payload: res.data });

			return res.data.cooldown;
		} catch (err) {
			console.log(err);
			dispatch({ type: 'GET_DATA_FAILURE' });
		}
	};

	const getBalance = async () => {
		dispatch({ type: 'GET_DATA_START' });

		try {
			const res = await axiosWithAuth().get('/bc/get_balance');

			dispatch({ type: 'GET_BALANCE_SUCCESS', payload: res.data.messages[0] });

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
