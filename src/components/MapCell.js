import React from 'react';
import styled from 'styled-components';

export default function MapCell({ cell }) {
	return <StyledCell>{cell.room_id}</StyledCell>;
}

const StyledCell = styled.div`
	border: 1px solid silver;
	width: 6rem;
	height: 6rem;
`;
