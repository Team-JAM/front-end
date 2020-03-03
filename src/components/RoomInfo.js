import React from 'react';
import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import { Item } from './';
import { ComponentWrapper } from '../styled-components/StyledComponents';

export default function RoomInfo() {
	const {
		data: { roomData },
	} = useDataContext();

	return (
		<RoomWrapper>
			<h3>ROOM</h3>
			<div>
				<p>
					Room {roomData.room_id} {roomData.coordinates}: {roomData.title}
				</p>
				<p>{roomData.description}</p>
				<p>Elevation: {roomData.elevation}</p>
				<p>Terrain: {roomData.terrain}</p>
				<p>Items:</p>
				<ul>
					{roomData.items &&
						roomData.items.map((item, index) => (
							<Item key={index} item={item} action='take' />
						))}
				</ul>
				<p>Players:</p>
				<ul>
					{roomData.players &&
						roomData.players.map(player => (
							<li key={player}>{player}</li>
							// <Player key={player} player={player} />
						))}
				</ul>
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
	overflow-y: auto;
`;
