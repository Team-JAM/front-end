import React from 'react';
import { useDataContext } from '../contexts/DataContext';
import { specialRooms } from '../data/specialRooms';
import { useTravel } from '../hooks/useTravel';
import { useSell } from '../hooks/useSell';
import { sleep } from '../utils/sleep';
import { useGetStatus } from '../hooks/useGetStatus';

export default function ButtonSellAllItems({ item }) {
	const {
		data: { playerStatus, roomData },
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

		// const asyncList = [];

		// for (let item of inventory) {
		//     const asyncFunction = async () => {
		//         const cooldown = await handleSell(item);
		//         return cooldown;
		//     };

		//     asyncList.push(asyncFunction);
		// }

		// for (const asyncFunction of asyncList) {
		//     const cooldown = await asyncFunction();
		//     await sleep(cooldown);
		// }

		// update status
		getStatus();
	};

	// const handleSell = async item => {
	// 	const cooldown = await sell(item);
	// 	// await sleep(cooldown)
	// 	return cooldown;
	// };

	return (
		<>
			{roomData.room_id <= 499 && inventory.length && (
				<button onClick={() => handleSellAllItems(item)}>Sell All Items</button>
			)}
		</>
	);
}
