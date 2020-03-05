import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';
import { specialRooms } from '../data/specialRooms';

export default function ButtonTransmogrify({ item }) {
	const {
		data: { roomData },
		dispatch,
	} = useDataContext();

	const handleClick = name => {
		dispatch({ type: 'GET_DATA_START' });

		(async () => {
			try {
				const res = await axiosWithAuth().post('/adv/transmogrify/', { name });

				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });

				const cooldown = res.data.cooldown;

				const asyncList = [getPlayerStatus, getBalance];

				const sleep = ms =>
					new Promise(resolve => {
						setTimeout(resolve, ms);
					});

				await sleep(cooldown * 1000);

				for (const asyncFunction of asyncList) {
					const cooldown = await asyncFunction();
					await sleep(cooldown * 1000);
				}
			} catch (err) {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			}
		})();
		// axiosWithAuth()
		// 	.post('/adv/transmogrify/', { name })
		// 	.then(res => {
		// 		console.log(res.data);
		// 		dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
		// 	})
		// 	.catch(err => {
		// 		console.log(err);
		// 		dispatch({ type: 'GET_DATA_FAILURE' });
		// 	});
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

	return (
		<div>
			{roomData.room_id === specialRooms['The Transmogriphier'] && (
				<button onClick={() => handleClick(item)}>Transmogrify</button>
			)}
		</div>
	);
}
