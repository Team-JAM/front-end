import React from 'react';
import styled from 'styled-components';

import { CooldownTimer, LambdaCoin, RoomInfo } from './';

export default function PanelRight() {
	return (
		<PanelWrapper>
			<CooldownTimer />
			<LambdaCoin />
			<RoomInfo />
		</PanelWrapper>
	);
}

const PanelWrapper = styled.div`
	padding: 2rem;
	width: 34rem;
	background-color: #ebebe3;
`;
