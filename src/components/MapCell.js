import React, { useState, useEffect } from 'react';
import { useDataContext } from '../contexts/DataContext';
import { specialRooms } from '../data/specialRooms';
import { useTravel, useTravelTreasure } from '../hooks';
import { StyledCell, StyledCellDark } from '../styled-components/StyledCells';
import IconHandler from './IconHandler';

export default function MapCell({ cell }) {
	const {
		data: {
			cooldownOver,
			inShadowWorld,
			roomData,
			roomToFind,
			roomToMine,
			roomWithSnitch,
			destination,
			path,
			wormholeRooms,
			playerStatus,
			autoTravelMode,
			treasureMode,
		},
		dispatch,
	} = useDataContext();

	const travel = useTravel();
	const travelTreasure = useTravelTreasure();

	const [isDestination, setIsDestination] = useState(false);
	const [isOnPath, setIsOnPath] = useState(false);
	const [isWormhole, setIsWormhole] = useState(false);

	const isRoom = cell !== null;

	const isCurrentRoom =
		isRoom && roomData.room_id !== null && roomData.room_id === cell.id;

	const isNormal = isRoom && cell.terrain === 'NORMAL';
	const isMountain = isRoom && cell.terrain === 'MOUNTAIN';
	const isCave = isRoom && cell.terrain === 'CAVE';
	const isTrap = isRoom && cell.terrain === 'TRAP';

	const specialRoomIDs = Object.values(specialRooms);
	const isSpecialRoom = isRoom && specialRoomIDs.includes(cell.id);

	const miningRoomID = Number(roomToMine.split('Mine your coin in room ')[1]);
	const isMiningRoom = isRoom && cell.id === miningRoomID;

	const snitchRoomID = Number(
		roomWithSnitch.split('Find the snitch in room ')[1],
	);
	const isSnitchRoom = isRoom && cell.id === snitchRoomID;

	const isRoomToFind =
		isRoom && cell.id === (roomToFind !== '' && Number(roomToFind));

	const canInteract = cooldownOver && !autoTravelMode;

	useEffect(() => {
		setIsDestination(isRoom && cell.id === destination);
		setIsOnPath(isRoom && cell.id !== null && path.includes(cell.id));
		setIsWormhole(
			isRoom &&
				cell.id !== null &&
				(wormholeRooms.includes(cell.id) ||
					wormholeRooms.includes(
						cell.id < 500 ? cell.id + 500 : cell.id - 500,
					)),
		);
	}, [isRoom, cell, destination, path, wormholeRooms]);

	const handleClick = cell => {
		if (cooldownOver && isRoom && !isCurrentRoom) {
			dispatch({ type: 'GET_DATA_START' });

			const destination_room = cell.id;

			treasureMode
				? travelTreasure(destination_room)
				: travel(destination_room);
		}
	};

	const room = {
		isRoom,
		isCurrentRoom,
		isSpecialRoom,
		isMiningRoom,
		isSnitchRoom,
		isRoomToFind,
		isNormal,
		isCave,
		isTrap,
		isMountain,
		isOnPath,
		isDestination,
		isWormhole,
		elevation: isRoom && cell.elevation,
		exits: isRoom && cell.exits,
	};

	return (
		<>
			{!inShadowWorld && (
				<StyledCell
					room={room}
					canInteract={canInteract}
					onClick={() => handleClick(cell)}>
					<IconHandler
						room={room}
						character={playerStatus.name}
						title={room.isRoom && cell.title}
						inShadowWorld={inShadowWorld}
					/>
				</StyledCell>
			)}
			{inShadowWorld && (
				<StyledCellDark
					room={room}
					canInteract={canInteract}
					onClick={() => handleClick(cell)}>
					<IconHandler
						room={room}
						character={playerStatus.name}
						title={room.isRoom && cell.title}
						inShadowWorld={inShadowWorld}
					/>
				</StyledCellDark>
			)}
		</>
	);
}
