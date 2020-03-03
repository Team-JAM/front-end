import React from 'react';
import styled from 'styled-components';

import {
	ItemInfo,
	// PlayerInfo,
	Controls,
	PlayerStatus,
	PlayerAbilities,
	PlayerInventory,
} from './';

export default function Footer() {
	return (
		<StyledFooter>
			<Controls />
			<ItemInfo />
			{/* <PlayerInfo /> */}
			<PlayerStatus />
			<PlayerAbilities />
			<PlayerInventory />
		</StyledFooter>
	);
}

const StyledFooter = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem;

	background-color: #d73729;
	border-top: 2px solid #e98681;
`;
