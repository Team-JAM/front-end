import React from 'react';
import styled from 'styled-components';
import {
	CooldownTimer,
	LambdaCoin,
	// LocateRoom,
	RoomToMine,
	Messages,
	RoomInfo,
} from '../panelright';

export default function PanelRight() {
	return (
		<PanelWrapper>
			<CooldownTimer />
			<LambdaCoin />
			{/* <LocateRoom /> */}
			<RoomToMine />
			<Messages />
			<RoomInfo />
		</PanelWrapper>
	);
}

const PanelWrapper = styled.div`
	padding: 2rem;
	width: 34rem;
	background-color: #ebebe3;
	display: flex;
	flex-direction: column;
	border-left: 3px solid #ddd6b9;
`;
