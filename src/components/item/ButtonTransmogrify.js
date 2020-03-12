import React from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useDataContext } from '../../contexts/DataContext';
import { useGetStatus, useGetBalance } from '../../hooks';
import { sleep } from '../../utils/sleep';
import { specialRooms } from '../../data/specialRooms';

export default function ButtonTransmogrify({ item }) {
	const {
		data: { roomData },
		dispatch,
	} = useDataContext();

	const getStatus = useGetStatus();

	const getBalance = useGetBalance();

	const handleClick = name => {
		dispatch({ type: 'GET_DATA_START' });

		(async () => {
			try {
				const res = await axiosWithAuth().post('/adv/transmogrify/', { name });
				console.log(res.data);

				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });

				const asyncList = [() => getStatus(res.data.cooldown), getBalance];

				for (const asyncFunction of asyncList) {
					const cooldown = await asyncFunction();
					await sleep(cooldown);
				}
			} catch (err) {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			}
		})();
	};

	return (
		<div>
			{roomData.room_id === specialRooms['The Transmogriphier'] && (
				<button onClick={() => handleClick(item)}>Transmogrify</button>
			)}
		</div>
	);
}
