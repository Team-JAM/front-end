import React, { useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
// import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

// import Item from './Item';

import { FooterComponentWrapper } from '../styled-components/StyledComponents';

export default function PlayerStatus() {
	const {
		data: { playerStatus },
		dispatch,
	} = useDataContext();

	const getStatus = () => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/adv/status')
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
		<FooterComponentWrapper>
			<h3>PLAYER STATUS</h3>
			<button onClick={handleClick}>Update</button>
			<div>
				<p>Name: {playerStatus.name}</p>
				<p>Encumbrance: {playerStatus.encumbrance}</p>
				<p>Strength: {playerStatus.strength}</p>
				<p>Speed: {playerStatus.speed}</p>
				<p>Gold: {playerStatus.gold}</p>
				<p>Has mined? {playerStatus.has_mined ? 'True' : 'False'}</p>
				<p>Status:</p>
				<ul>
					{playerStatus.status &&
						playerStatus.status.map(status => <li key={status}>{status}</li>)}
				</ul>
			</div>
		</FooterComponentWrapper>
	);
}
