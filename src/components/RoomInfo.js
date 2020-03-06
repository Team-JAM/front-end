import React from 'react';
import styled from 'styled-components';
import { useDataContext } from '../contexts/DataContext';
import { useGetRoomData } from '../hooks';
import { Item } from './';
import {
	ComponentWrapper,
	StatusHeader,
} from '../styled-components/StyledComponents';

export default function RoomInfo() {
	const {
		data: { roomData, autoTravelMode },
	} = useDataContext();

	const getRoomData = useGetRoomData();

	const handleClick = () => {
		if (!autoTravelMode) getRoomData();
	};

	return (
		<RoomWrapper>
			<StatusHeader autoTravelMode={autoTravelMode} onClick={handleClick}>
				ROOM {roomData.room_id} {roomData.coordinates}: {roomData.title}
			</StatusHeader>
			<div>
				{/* <p>
					Room {roomData.room_id} {roomData.coordinates}: {roomData.title}
				</p> */}
				<p>{roomData.description}</p>
				<p>Elevation: {roomData.elevation}</p>
				<p>Terrain: {roomData.terrain}</p>
				{roomData.items && roomData.items[0] && (
					<>
						<p>Items:</p>
						<ul>
							{roomData.items.map((item, index) => (
								<Item
									key={index}
									item={item}
									action='Take'
									inInventory={false}
								/>
							))}
						</ul>
					</>
				)}
				{roomData.players && roomData.players[0] && (
					<>
						<p>Players:</p>
						<ul>
							{roomData.players.map(player => (
								<li key={player}>{player}</li>
								// <Player key={player} player={player} />
							))}
						</ul>
					</>
				)}
				<p>Exits:</p>
				<ul>
					{roomData.exits &&
						roomData.exits.map(exit => <li key={exit}>{exit}</li>)}
				</ul>
				{/* <p>Messages:</p>
				<ul>
					{roomData.messages &&
						roomData.messages.map(message => <li key={message}>{message}</li>)}
				</ul> */}
			</div>
		</RoomWrapper>
	);
}

const RoomWrapper = styled(ComponentWrapper)`
	max-height: 30vh;
	// max-height: auto;
	flex-grow: 1;
	flex-shrink: 1;
	overflow-y: auto;
`;
