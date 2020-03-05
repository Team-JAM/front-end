import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';
import { useGetStatus } from '../hooks/useGetStatus';
import { specialRooms } from '../data/specialRooms';

export default function ButtonBuyDonut() {
	const {
		data: { roomData },
		dispatch,
	} = useDataContext();
	const getStatus = useGetStatus();

	const handleBuy = () => {
		dispatch({ type: 'GET_DATA_START' });

		(async () => {
			try {
				const res = await axiosWithAuth().post('/adv/buy/', {
					name: 'donut',
					confirm: 'yes',
				});
				// console.log(res.data);
				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });

				getStatus(res.data.cooldown);
			} catch (err) {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			}
		})();
	};

	return (
		<div>
			{roomData.room_id === specialRooms['JKMT Donuts'] && (
				<button onClick={handleBuy}>Buy Donut</button>
			)}
		</div>
	);
}
