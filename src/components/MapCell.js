import React, { useState, useEffect } from 'react';
import { useDataContext } from '../contexts/DataContext';
import { specialRooms } from '../data/specialRooms';
import { useTravel } from '../hooks/useTravel';
import {
	StyledCell,
	StyledCellDark,
	Dot,
	LightDot,
} from '../styled-components/StyledCells';
import Icon from '../icons/';

export default function MapCell({ cell }) {
	const {
		data: {
			cooldownOver,
			inShadowWorld,
			roomData,
			roomToFind,
			roomToMine,
			destination,
			path,
			playerStatus,
			autoTravelMode,
		},
		dispatch,
	} = useDataContext();

	const [isOnPath, setIsOnPath] = useState(false);
	const [isDestination, setIsDestination] = useState(false);

	const isRoom = cell !== null;

	const isCurrentRoom =
		roomData.room_id !== null && cell !== null && roomData.room_id === cell.id;

	const isTrap = cell !== null && cell.terrain === 'TRAP';

	const specialRoomIDs = Object.values(specialRooms);
	const isSpecialRoom = cell !== null && specialRoomIDs.includes(cell.id);

	const miningRoomID = Number(roomToMine.split('Mine your coin in room ')[1]);
	const isMiningRoom = cell !== null && cell.id === miningRoomID;

	const isRoomToFind =
		cell !== null && cell.id === (roomToFind !== '' && Number(roomToFind));

	const character = playerStatus.name;

	useEffect(() => {
		setIsDestination(cell !== null && cell.id === destination);
		setIsOnPath(cell !== null && cell.id !== null && path.includes(cell.id));
	}, [cell, destination, path]);

	const travel = useTravel();

	const handleClick = cell => {
		if (cooldownOver && cell !== null && !isCurrentRoom) {
			dispatch({ type: 'GET_DATA_START' });

			const destination_room = cell.id;

			travel(destination_room);
		}
	};

	return (
		<>
			{!inShadowWorld && (
				<StyledCell
					isRoom={isRoom}
					isCurrentRoom={isCurrentRoom}
					isSpecialRoom={isSpecialRoom}
					isMiningRoom={isMiningRoom}
					isRoomToFind={isRoomToFind}
					isTrap={isTrap}
					isOnPath={isOnPath}
					isDestination={isDestination}
					terrain={cell && cell.terrain}
					elevation={cell && cell.elevation}
					exitN={cell && cell.exits.n}
					exitS={cell && cell.exits.s}
					exitE={cell && cell.exits.e}
					exitW={cell && cell.exits.w}
					cooldownOver={cooldownOver}
					autoTravelMode={autoTravelMode}
					onClick={() => handleClick(cell)}>
					{isOnPath && !isDestination && <Dot />}
					{isCurrentRoom && (
						<Icon
							name={character}
							style={{
								flexShrink: '0',
								zIndex: '1100',
								marginBottom: '0.2rem',
								width: '5.75rem',
								height: '5.75rem',
							}}
						/>
					)}
					{isSpecialRoom && (
						<Icon
							name={cell.title}
							style={{
								flexShrink: '0',
								zIndex: '1000',
								marginBottom: '0.2rem',
							}}
						/>
					)}
					{isTrap && (
						<Icon
							name='trap'
							style={{
								flexShrink: '0',
								width: '4rem',
								height: '4rem',
								zIndex: '1000',
							}}
						/>
					)}
					<div>{cell && !isOnPath && cell.id}</div>
					{/* <div>{(isSpecialRoom || isCurrentRoom) && cell.title}</div> */}
				</StyledCell>
			)}
			{inShadowWorld && (
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
					cooldownOver={cooldownOver}
					autoTravelMode={autoTravelMode}
					onClick={() => handleClick(cell)}>
					{isOnPath && !isDestination && <LightDot />}
					{isCurrentRoom && (
						<Icon
							name={character}
							style={{
								flexShrink: '0',
								zIndex: '1100',
								marginBottom: '0.2rem',
								width: '5.75rem',
								height: '5.75rem',
							}}
						/>
					)}
					{isSpecialRoom && (
						<Icon
							name={cell.title}
							style={{
								flexShrink: '0',
								zIndex: '1000',
								marginBottom: '0.2rem',
							}}
						/>
					)}
					<div>{cell && !isOnPath && cell.id}</div>
					{/* <div>{(isSpecialRoom || isCurrentRoom) && cell.title}</div> */}
				</StyledCellDark>
			)}
		</>
	);
}
