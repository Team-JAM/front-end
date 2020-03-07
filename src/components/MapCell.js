import React, { useState, useEffect } from 'react';
import { useDataContext } from '../contexts/DataContext';
import { specialRooms } from '../data/specialRooms';
import { useTravel, useTravelTreasure } from '../hooks';
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

	const [isOnPath, setIsOnPath] = useState(false);
	const [isDestination, setIsDestination] = useState(false);
	const [isWormhole, setIsWormhole] = useState(false);

	const isRoom = cell !== null;

	const isCurrentRoom =
		isRoom && roomData.room_id !== null && roomData.room_id === cell.id;

	const isNormal = isRoom && cell.terrain === 'NORMAL';
	// const isMountain = isRoom && cell.terrain === 'MOUNTAIN';
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

	const character = playerStatus.name;

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
	}, [cell, destination, path, wormholeRooms]);

	const travel = useTravel();
	const travelTreasure = useTravelTreasure();

	const handleClick = cell => {
		if (cooldownOver && isRoom && !isCurrentRoom) {
			dispatch({ type: 'GET_DATA_START' });

			const destination_room = cell.id;

			treasureMode
				? travelTreasure(destination_room)
				: travel(destination_room);
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
					{isOnPath && !isDestination && !isWormhole && <Dot />}
					{isWormhole && !isDestination && !isSpecialRoom && !isCurrentRoom && (
						<Icon
							name='wormhole'
							style={{
								flexShrink: '0',
								zIndex: '1000',
								width: '4rem',
								height: '4rem',
							}}
						/>
					)}
					{isCurrentRoom && (
						<Icon
							name={character}
							style={{
								flexShrink: '0',
								zIndex: '1100',
								marginBottom: '0.2rem',
								width: '5.75rem',
								height: '5.75rem',
								position: isSpecialRoom ? 'relative' : 'static',
								top: '6rem',
								right: '1.5rem',
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
					{isNormal &&
						!isSpecialRoom &&
						!isCurrentRoom &&
						!isOnPath &&
						!isWormhole && (
							<Icon
								name='normal'
								style={{
									flexShrink: '0',
									width: '1.5rem',
									height: '1.5rem',
									zIndex: '1000',
								}}
							/>
						)}
					{/* {isMountain && !isSpecialRoom && !isCurrentRoom && !isOnPath && (
						<Icon
							name='mountain'
							style={{
								flexShrink: '0',
								width: '2rem',
								height: '2rem',
								zIndex: '1000',
							}}
						/>
					)} */}
					{isCave &&
						!isCurrentRoom &&
						!isSpecialRoom &&
						!isOnPath &&
						!isWormhole && (
							<Icon
								name='cave'
								style={{
									flexShrink: '0',
									width: '3.5rem',
									height: '3.5rem',
									marginBottom: '1.5rem',
									zIndex: '1000',
								}}
							/>
						)}
					{isTrap && !isOnPath && !isWormhole && (
						<Icon
							name='trap'
							style={{
								flexShrink: '0',
								width: '3.5rem',
								height: '3.5rem',
								zIndex: '1000',
							}}
						/>
					)}
					{/* <div>{cell && !isOnPath && cell.id}</div> */}
					{/* <div>{(isSpecialRoom || isCurrentRoom) && cell.title}</div> */}
				</StyledCell>
			)}
			{inShadowWorld && (
				<StyledCellDark
					isRoom={isRoom}
					isCurrentRoom={isCurrentRoom}
					isSpecialRoom={isSpecialRoom}
					isSnitchRoom={isSnitchRoom}
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
					{isOnPath && !isDestination && !isWormhole && <LightDot />}
					{isWormhole && !isDestination && !isSpecialRoom && !isCurrentRoom && (
						<Icon
							name='wormhole'
							style={{
								flexShrink: '0',
								zIndex: '1000',
								width: '4rem',
								height: '4rem',
							}}
						/>
					)}
					{isCurrentRoom && (
						<Icon
							name={character}
							style={{
								flexShrink: '0',
								zIndex: '1100',
								marginBottom: '0.2rem',
								width: '5.75rem',
								height: '5.75rem',
								position: isSpecialRoom ? 'relative' : 'static',
								top: '6rem',
								right: '1.5rem',
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
					{isNormal &&
						!isSpecialRoom &&
						!isCurrentRoom &&
						!isOnPath &&
						!isWormhole && (
							<Icon
								name='normal'
								style={{
									flexShrink: '0',
									width: '1.5rem',
									height: '1.5rem',
									zIndex: '1000',
								}}
							/>
						)}
					{/* <div>{cell && !isOnPath && cell.id}</div> */}
					{/* <div>{(isSpecialRoom || isCurrentRoom) && cell.title}</div> */}
				</StyledCellDark>
			)}
		</>
	);
}
