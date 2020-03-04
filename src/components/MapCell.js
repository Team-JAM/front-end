import React, { useState, useEffect } from 'react';
import { axiosTeamJamBackEnd } from '../utils/axiosTeamJamBackEnd';
import { useDataContext } from '../contexts/DataContext';
import { specialRooms } from '../data/specialRooms';
import { StyledCell, StyledCellDark } from '../styled-components/StyledCells';

export default function MapCell({ cell }) {
	const {
		data: { warpMode, roomData, roomToFind, roomToMine, destination, path },
		dispatch,
	} = useDataContext();
	const [isOnPath, setIsOnPath] = useState(false);
	const [isDestination, setIsDestination] = useState(false);

	const isRoom = cell !== null;

	const isCurrentRoom =
		roomData.room_id !== null && cell !== null && roomData.room_id === cell.id;

	const specialRoomIDs = Object.values(specialRooms);
	const isSpecialRoom = cell && cell.id && specialRoomIDs.includes(cell.id);

	const miningRoomID = Number(roomToMine.split('Mine your coin in room ')[1]);
	const isMiningRoom = cell && cell.id === miningRoomID;

	const isRoomToFind =
		cell && cell.id === (roomToFind !== '' && Number(roomToFind));

	useEffect(() => {
		setIsDestination(cell && cell.id === destination);
		setIsOnPath(cell && cell.id && path.includes(cell.id));
	}, [cell, destination, path]);

	const handleClick = cell => {
		if (cell) {
			dispatch({ type: 'GET_DATA_START' });

			const destination_room = cell.id;

			axiosTeamJamBackEnd()
				.post('/get_directions/', {
					starting_room: roomData.room_id,
					destination_room,
				})
				.then(res => {
					// console.log('Path:', res.data.path);
					const path = res.data.path.map(room => Number(room[1]));

					dispatch({
						type: 'SET_PATH',
						payload: { destination: path[path.length - 1], path },
					});

					const directions = res.data.path_directions;
					// console.log('Directions', directions);
					while (directions.length > 0) {
						if (directions[0][0] === 'dash') {
							handleDash(directions[0]);
						} else if (directions[0][0] === 'fly') {
							handleFly(directions[0]);
						} else if (directions[0][0] === 'move') {
							handleMove(directions[0]);
						} else if (directions[0][0] === 'recall') {
							handleRecall(directions[0]);
						}
						directions.shift();
					}
				})
				.catch(err => {
					console.log(err);
					dispatch({ type: 'GET_DATA_FAILURE' });
				});
		}
	};

	const handleDash = directions => {
		console.log(directions);
	};

	const handleFly = directions => {
		console.log(directions);
	};

	const handleMove = directions => {
		console.log(directions);
	};

	const handleRecall = directions => {
		console.log(directions);
	};

	return (
		<>
			{!warpMode && (
				<StyledCell
					isRoom={isRoom}
					isCurrentRoom={isCurrentRoom}
					isSpecialRoom={isSpecialRoom}
					isMiningRoom={isMiningRoom}
					isRoomToFind={isRoomToFind}
					isOnPath={isOnPath}
					isDestination={isDestination}
					terrain={cell && cell.terrain}
					elevation={cell && cell.elevation}
					exitN={cell && cell.exits.n}
					exitS={cell && cell.exits.s}
					exitE={cell && cell.exits.e}
					exitW={cell && cell.exits.w}
					onClick={() => handleClick(cell)}>
					<div>{cell && cell.id}</div>
					<div>{(isSpecialRoom || isCurrentRoom) && cell.title}</div>
				</StyledCell>
			)}
			{warpMode && (
				<StyledCellDark
					isRoom={isRoom}
					isCurrentRoom={isCurrentRoom}
					isSpecialRoom={isSpecialRoom}
					isMiningRoom={isMiningRoom}
					isRoomToFind={isRoomToFind}
					isOnPath={isOnPath}
					isDestination={isDestination}
					terrain={cell && cell.terrain}
					elevation={cell && cell.elevation}
					exitN={cell && cell.exits.n}
					exitS={cell && cell.exits.s}
					exitE={cell && cell.exits.e}
					exitW={cell && cell.exits.w}
					onClick={() => handleClick(cell)}>
					<div>{cell && cell.id}</div>
					<div>{(isSpecialRoom || isCurrentRoom) && cell.title}</div>
				</StyledCellDark>
			)}
		</>
	);
}
