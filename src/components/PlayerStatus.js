import React from 'react';
// import styled from 'styled-components';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';
import { ButtonReceive } from './';
import {
	FooterComponentWrapper,
	StatusHeader,
} from '../styled-components/StyledComponents';

export default function PlayerStatus() {
	const {
		data: { playerStatus, autoTravelMode },
		dispatch,
	} = useDataContext();

	const getStatus = () => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/adv/status')
			.then(res => {
				console.log(res.data);
				// localStorage.setItem('name', res.data.name);

				dispatch({ type: 'GET_STATUS_SUCCESS', payload: res.data });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	};

	const handleStatus = () => {
		if (!autoTravelMode) {
			getStatus();
		}
	};

	return (
		<FooterComponentWrapper>
			<StatusHeader autoTravelMode={autoTravelMode} onClick={handleStatus}>
				PLAYER STATUS
			</StatusHeader>
			{playerStatus.encumbrance && (
				<div>
					{playerStatus.sugar_rush && (
						<p>Sugar Rush: {playerStatus.sugar_rush}</p>
					)}
					{playerStatus.snitches && <p>Snitches: {playerStatus.snitches}</p>}
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
					<ButtonReceive />
				</div>
			)}
		</FooterComponentWrapper>
	);
}
