import React from 'react';
import styled from 'styled-components';

export default function PathCell() {
	return <StyledPathCell></StyledPathCell>;
}

const StyledPathCell = styled.div`
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	background-color: rgba(0, 0, 0, 0.4);
`;
