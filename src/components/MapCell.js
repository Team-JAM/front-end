import React from 'react';
import styled from 'styled-components';

export default function MapCell({ cell }) {
	return <StyledCell>{cell.room_id}</StyledCell>;
}

const StyledCell = styled.div`
	border: 1px solid silver;
	width: 3rem;
	height: 3rem;
`;
