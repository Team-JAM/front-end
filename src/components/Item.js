import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { useDataContext } from '../contexts/DataContext';

export default function Item({ item, action }) {
	const {
		data: { cooldownOver, roomData },
		dispatch,
	} = useDataContext();

	const handleExamine = name => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/examine', { name })
			.then(res => {
				// console.log(res.data);
				dispatch({ type: 'EXAMINE_ITEM_SUCCESS', payload: res.data });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	};

	const handleTakeDrop = name => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post(`/${action}`, { name })
			.then(res => {
				// console.log(res.data);
				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
				const message = res.data.messages[0];

				if (action === 'take') {
					const item = message.split('You have picked up ')[1];
					dispatch({ type: 'TAKE_ITEM', payload: item });
				} else if (action === 'drop') {
					const item = message.split('You have dropped ')[1];
					dispatch({ type: 'DROP_ITEM', payload: item });
				}
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	};

	const handlePrice = name => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/sell', { name })
			.then(res => {
				console.log(res.data);
				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	};

	const handleSell = name => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/sell', { name, confirm: 'yes' })
			.then(res => {
				console.log(res.data);
				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
				dispatch({ type: 'DROP_ITEM', payload: item });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	};

	return (
		<li>
			{item}
			{cooldownOver && (
				<>
					<button onClick={() => handleExamine(item)}>Examine</button>
					<button onClick={() => handleTakeDrop(item)}>{action}</button>
					{roomData.room_id === 1 && (
						<button onClick={() => handlePrice(item)}>Get Price</button>
					)}
					{roomData.room_id === 1 && (
						<button onClick={() => handleSell(item)}>Sell Item</button>
					)}
				</>
			)}
		</li>
	);
}
