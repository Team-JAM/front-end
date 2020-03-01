import React from 'react';
// import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import Item from './Item';

export default function RoomInfo() {
	const {
		data: { roomData },
	} = useDataContext();

	return (
		<div>
			<h3>ROOM INFO</h3>
			<div>
				<p>
					Room {roomData.room_id} {roomData.coordinates}: {roomData.title}
				</p>
				<p>{roomData.description}</p>
				<p>Elevation: {roomData.elevation}</p>
				<p>Terrain: {roomData.terrain}</p>
				<p>Items:</p>
				{roomData.items &&
					roomData.items.map(item => <Item key={item} item={item} />)}
				<p>Players:</p>
				<ul>
					{roomData.players &&
						roomData.players.map(player => <li key={player}>{player}</li>)}
				</ul>
				<p>Exits:</p>
				<ul>
					{roomData.exits &&
						roomData.exits.map(exit => <li key={exit}>{exit}</li>)}
				</ul>
				<p>Messages:</p>
				<ul>
					{roomData.messages &&
						roomData.messages.map(message => <li key={message}>{message}</li>)}
				</ul>
			</div>
		</div>
	);
}
