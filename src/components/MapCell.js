import React from 'react';
import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

export default function MapCell({ cell }) {
	const {
		data: { roomData },
	} = useDataContext();

	// console.log('MAPCELL CELL', cell);
	// console.log('MAPCELL ROOMDATA', roomData);

	const isCurrentRoom = roomData.room_id === cell.room_id ? true : false;

	return (
		<StyledCell
			isCurrentRoom={isCurrentRoom}
			terrain={cell.terrain}
			elevation={cell.elevation}>
			{cell.room_id}
		</StyledCell>
	);
}

const StyledCell = styled.div`
	width: 6rem;
	height: 6rem;

	border: 1px solid lightskyblue;
	border: ${props => props.terrain === 'NORMAL' && '1px solid brown'};
	border: ${props => props.isCurrentRoom && '2px solid red'};

	background-color: lightcyan;
	background-color: ${props => props.terrain === 'NORMAL' && '#feb950'};
	background-color: ${props => props.terrain === 'CAVE' && '#281300'};
	background-color: ${props => props.terrain === 'MOUNTAIN' && '#991e00'};
	background-color: ${props => props.terrain === 'TRAP' && 'red'};
	background-color: ${props => props.isCurrentRoom && 'white'};
`;
