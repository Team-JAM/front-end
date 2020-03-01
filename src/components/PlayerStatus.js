import React, { useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { useDataContext } from '../contexts/DataContext';

import Item from './Item';

export default function PlayerStatus() {
	const {
		data: { playerStatus },
		dispatch,
	} = useDataContext();

	useEffect(() => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/adv/status')
			.then(res => {
				// console.log(res);
				dispatch({ type: 'GET_STATUS_SUCCESS', payload: res.data });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_STATUS_FAILURE' });
			});
	}, []);

	return (
		<div>
			<h3>STATUS AND INVENTORY</h3>
			<div>
				<p>Name: {playerStatus.name}</p>
				<p>Encumberance: {playerStatus.encumberance}</p>
				<p>Strength: {playerStatus.strength}</p>
				<p>Speed: {playerStatus.speed}</p>
				<p>Gold: {playerStatus.gold}</p>
				<p>Status:</p>
				<ul>
					{playerStatus.status &&
						playerStatus.status.map(status => <li key={status}>{status}</li>)}
				</ul>
				<p>Inventory:</p>
				{playerStatus.inventory &&
					playerStatus.inventory.map(item => <Item key={item} item={item} />)}
			</div>
		</div>
	);
}
