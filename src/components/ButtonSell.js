import React from 'react';
import { useDataContext } from '../contexts/DataContext';
import { specialRooms } from '../data/specialRooms';
import { useSell } from '../hooks/useSell';
import { useGetStatus } from '../hooks/useGetStatus';

export default function ButtonSell({ item }) {
	const {
		data: { roomData }
	} = useDataContext();

	const getStatus = useGetStatus();

	const sell = useSell();

	const handleSell = async (item) => {
		const cooldown = await sell(item);
		getStatus(cooldown);
	}

	return (
		<>
			{roomData.room_id === specialRooms['Shop'] && (
				<button onClick={() => handleSell(item)}>Sell Item</button>
			)}
		</>
	);
}
