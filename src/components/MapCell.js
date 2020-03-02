import React from 'react';
import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

export default function MapCell({ cell }) {
	const {
		data: { roomData },
	} = useDataContext();

	// console.log('MAPCELL CELL', cell && cell.elevation);
	// console.log('MAPCELL ROOMDATA', roomData);

	const isCurrentRoom =
		roomData.room_id && cell && roomData.room_id === cell.id;

	return (
		<StyledCell
			isCurrentRoom={isCurrentRoom}
			terrain={cell && cell.terrain}
			elevation={cell && cell.elevation}>
			<div>{cell && cell.id}</div>
		</StyledCell>
	);
}

const StyledCell = styled.div`
	width: 6rem;
	height: 6rem;

	color: ${props => props.terrain === 'CAVE' && 'white'};

	border: 1px solid lightskyblue;
	border: ${props => props.terrain === 'NORMAL' && '1px solid #baa369'};
	border: ${props => props.terrain === 'CAVE' && '1px solid gray'};
	border: ${props => props.terrain === 'TRAP' && '1px solid yellow'};
	border: ${props => props.terrain === 'MOUNTAIN' && '1px solid #654321'};
	border: ${props => props.isCurrentRoom && '2px solid red'};

	background-color: lightcyan;
	background-color: ${props => props.terrain === 'NORMAL' && '#cdbf81'};
	background-color: ${props => props.terrain === 'CAVE' && '#202020'};
	background-color: ${props => props.terrain === 'TRAP' && 'red'};
	background-color: ${props =>
		props.terrain === 'MOUNTAIN' && 'rgb(101, 67, 33)'};
	background-color: ${props => props.isCurrentRoom && 'white'};

	opacity: ${props => props.elevation === 5 && '1'};
	opacity: ${props => props.elevation === 4 && '0.9'};
	opacity: ${props => props.elevation === 3 && '0.8'};
	opacity: ${props => props.elevation === 2 && '0.7'};
	opacity: ${props => props.elevation === 1 && '0.6'};
`;
