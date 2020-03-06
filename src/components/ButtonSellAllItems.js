import React from 'react';
import { useDataContext } from '../contexts/DataContext';
import { specialRooms } from '../data/specialRooms';
import { useTravel } from '../hooks/useTravel';
import { useSell } from '../hooks/useSell';
import { sleep } from '../utils/sleep';
import { useGetStatus } from '../hooks/useGetStatus';

export default function ButtonSellAllItems({ item }) {
	const {
		data: { playerStatus, roomData, cooldownOver, autoTravelMode },
	} = useDataContext();

	const travel = useTravel();

	const sell = useSell();

	const getStatus = useGetStatus();

	// grab inventory from status
	const inventory = playerStatus.inventory;

	const handleSellAllItems = async item => {
		// if not in shop already, navigate to shop
		if (roomData !== specialRooms['Shop']) {
			await travel(specialRooms['Shop']);
		}

		// sell each item in inventory
		for (let item of inventory) {
			const cooldown = await sell(item);
			await sleep(cooldown);
		}

		// update status
		getStatus();
	};

	return (
		<>
			{roomData.room_id <= 499 &&
				inventory.length > 0 &&
				cooldownOver &&
				!autoTravelMode && (
					<button onClick={() => handleSellAllItems(item)}>
						Sell All Items
					</button>
				)}
		</>
	);
}
