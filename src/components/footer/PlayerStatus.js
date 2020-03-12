import React from 'react';
// import styled from 'styled-components';
import { useDataContext } from '../../contexts/DataContext';
import { useGetStatus } from '../../hooks';
import { ButtonReceive } from '..';
import {
	FooterComponentWrapper,
	StatusHeader,
} from '../../styled-components/StyledComponents';

export default function PlayerStatus() {
	const {
		data: { playerStatus, autoTravelMode },
	} = useDataContext();

	const getStatus = useGetStatus();

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
						<p>
							<span style={{ fontWeight: 'bold' }}>Sugar Rush:</span>{' '}
							{playerStatus.sugar_rush}
						</p>
					)}
					{playerStatus.snitches && (
						<p>
							<span style={{ fontWeight: 'bold' }}>Snitches:</span>{' '}
							{playerStatus.snitches}
						</p>
					)}
					<p>
						<span style={{ fontWeight: 'bold' }}>Encumbrance:</span>{' '}
						{playerStatus.encumbrance}
					</p>
					<p>
						<span style={{ fontWeight: 'bold' }}>Strength:</span>{' '}
						{playerStatus.strength}
					</p>
					<p>
						<span style={{ fontWeight: 'bold' }}>Speed:</span>{' '}
						{playerStatus.speed}
					</p>
					<p>
						<span style={{ fontWeight: 'bold' }}>Gold:</span>{' '}
						{playerStatus.gold}
					</p>
					<p>
						<span style={{ fontWeight: 'bold' }}>Has mined?</span>{' '}
						{playerStatus.has_mined ? 'True' : 'False'}
					</p>
					{playerStatus.status[0] && (
						<p>
							<span style={{ fontWeight: 'bold' }}>Status:</span>
						</p>
					)}
					<ul>
						{playerStatus.status?.map(status => (
							<li key={status}>{status}</li>
						))}
					</ul>
					<ButtonReceive />
				</div>
			)}
		</FooterComponentWrapper>
	);
}
