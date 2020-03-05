import React from 'react';
import { useDataContext } from '../contexts/DataContext';
import { specialRooms } from '../data/specialRooms';
import { useSell } from '../hooks/useSell';

export default function ButtonSell({ item }) {
	const {
		data: { roomData },
		dispatch,
	} = useDataContext();

	const sell = useSell();

	return (
		<>
			{roomData.room_id === specialRooms['Shop'] && (
				<button onClick={() => sell(item)}>Sell Item</button>
			)}
		</>
	);
}
