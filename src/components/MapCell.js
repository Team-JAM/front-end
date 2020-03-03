import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

export default function MapCell({ cell }) {
	const {
		data: { roomData },
	} = useDataContext();
	const [specialRoom, setSpecialRoom] = useState(false);

	// console.log('MAPCELL CELL', cell && cell.exits);
	// console.log('MAPCELL ROOMDATA', roomData);

	const isCurrentRoom =
		roomData.room_id && cell && roomData.room_id === cell.id;

	const specialRoomIDs = [461, 499, 374, 486, 55, 15, 467, 22, 495, 492, 1];

	useEffect(() => {
		if (cell && specialRoomIDs.includes(cell.id)) {
			setSpecialRoom(true);
		}
	}, []);

	return (
		<StyledCell
			isCurrentRoom={isCurrentRoom}
			isSpecialRoom={specialRoom}
			terrain={cell && cell.terrain}
			elevation={cell && cell.elevation}
			exitN={cell && cell.exits.n}
			exitS={cell && cell.exits.s}
			exitE={cell && cell.exits.e}
			exitW={cell && cell.exits.w}>
			<div>{cell && cell.id}</div>
			<div>{specialRoom && cell.title}</div>
		</StyledCell>
	);
}

const StyledCell = styled.div`
	flex-shrink: 0;
	width: 6rem;
	height: 6rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 0.8rem;

	color: ${props => props.terrain === 'CAVE' && 'white'};
	color: ${props => props.terrain === 'MOUNTAIN' && 'white'};
	color: ${props => props.isSpecialRoom && 'black'};

	border: 1px solid lightskyblue;
	border: ${props => props.terrain === 'NORMAL' && '2px solid black'};
	border: ${props => props.terrain === 'CAVE' && '2px solid gray'};
	border: ${props => props.terrain === 'TRAP' && '2px solid black'};
	border: ${props => props.terrain === 'MOUNTAIN' && '2px solid black'};

	border-left: ${props => props.exitW && '0'};
	border-right: ${props => props.exitE && '0'};
	border-top: ${props => props.exitS && '0'};
	border-bottom: ${props => props.exitN && '0'};

	border: ${props => props.isCurrentRoom && '3px solid red'};

	background-color: lightcyan;
	background-color: ${props => props.terrain === 'NORMAL' && '#567d46'};
	background-color: ${props => props.terrain === 'CAVE' && '#202020'};
	background-color: ${props => props.terrain === 'TRAP' && 'red'};
	background-color: ${props =>
		props.terrain === 'MOUNTAIN' && 'rgb(101, 67, 33)'};
	background-color: ${props => props.isSpecialRoom && 'yellow'};
	background-color: ${props => props.isCurrentRoom && 'white'};

	opacity: ${props => props.elevation === 5 && '1'};
	opacity: ${props => props.elevation === 4 && '0.9'};
	opacity: ${props => props.elevation === 3 && '0.8'};
	opacity: ${props => props.elevation === 2 && '0.7'};
	opacity: ${props => props.elevation === 1 && '0.6'};
`;
