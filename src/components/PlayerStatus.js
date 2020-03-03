import React, { useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
// import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import Item from './Item';

import { ComponentWrapper } from '../styled-components/StyledComponents';

export default function PlayerStatus() {
	const {
		data: { playerStatus },
		dispatch,
	} = useDataContext();

	const getStatus = () => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/status')
			.then(res => {
				// console.log(res.data);
				dispatch({ type: 'GET_STATUS_SUCCESS', payload: res.data });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	};

	useEffect(() => {
		getStatus();
	}, []);

	const handleClick = () => getStatus();

	return (
		<ComponentWrapper>
			<h3>STATUS AND INVENTORY</h3>
			<button onClick={handleClick}>Update</button>
			<div>
				<p>Name: {playerStatus.name}</p>
				<p>Encumberance: {playerStatus.encumberance}</p>
				<p>Strength: {playerStatus.strength}</p>
				<p>Speed: {playerStatus.speed}</p>
				<p>Gold: {playerStatus.gold}</p>
				<p>Bodywear: {playerStatus.bodywear}</p>
				<p>Footwear: {playerStatus.footwear}</p>
				<p>Has mined? {playerStatus.has_mined ? 'True' : 'False'}</p>
				<p>Status:</p>
				<ul>
					{playerStatus.status &&
						playerStatus.status.map(status => <li key={status}>{status}</li>)}
				</ul>
				<p>Inventory:</p>
				<ul>
					{playerStatus.inventory &&
						playerStatus.inventory.map((item, index) => (
							<Item key={index} item={item} action='drop' />
						))}
				</ul>
			</div>
		</ComponentWrapper>
	);
}
