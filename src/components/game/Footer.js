import React from 'react';
import styled from 'styled-components';

import {
	ExamineItem,
	Controls,
	PlayerStatus,
	PlayerAbilities,
	PlayerInventory,
} from '../footer';

export default function Footer() {
	return (
		<StyledFooter>
			<Controls />
			<ExamineItem />
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

	overflow-x: auto;

	background-color: #d73729;
	border-top: 3px solid #e98681;
`;
