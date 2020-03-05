import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';
import { useGetStatus } from '../hooks/useGetStatus';
import { sleep } from '../utils/sleep';
import { specialRooms } from '../data/specialRooms';

export default function ButtonBuyDonut() {
	const {
		data: { roomData },
		dispatch,
	} = useDataContext();

	const getStatus = useGetStatus();

	const handleClick = () => {
		dispatch({ type: 'GET_DATA_START' });

		(async () => {
			try {
				const res = await axiosWithAuth().post('/adv/buy', {
					name: 'donut',
					confirm: 'yes',
				});
				// console.log(res.data);
				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });

				const cooldown = res.data.cooldown;
				await sleep(cooldown);
				getStatus();
			} catch (err) {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			}
		})();
	};

	return (
		<div>
			{roomData.room_id === specialRooms['JKMT Donuts'] && (
				<button onClick={handleClick}>Buy Donut</button>
			)}
		</div>
	);
}
