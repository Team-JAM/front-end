import React from 'react';
import styled from 'styled-components';

import { Map, PanelRight, Footer } from './';

export default function Game() {

	return (
		<div>
			<GameWrapper>
				<Map />
				<PanelRight />
			</GameWrapper>
			<Footer />
		</div>
	);
}

const GameWrapper = styled.div`
	display: flex;
	height: 65vh;
`;
