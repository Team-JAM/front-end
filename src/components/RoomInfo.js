import React from 'react';
import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

export default function RoomInfo() {
	const {
		data: { roomData },
	} = useDataContext();

	return (
		<div>
			<h3>ROOM INFO</h3>
			{roomData && (
				<div>
					<p>
						Room {roomData.room_id} {roomData.coordinates}: {roomData.title}
					</p>
					<p>{roomData.description}</p>
					<p>Elevation: {roomData.elevation}</p>
					<p>Terrain: {roomData.terrain}</p>
					<p>Cooldown: {roomData.cooldown}</p>
					<p>Items:</p>
					<ul>
						{roomData.items &&
							roomData.items.map(item => <li key={item}>{item}</li>)}
					</ul>
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
							roomData.messages.map(message => (
								<li key={message}>{message}</li>
							))}
					</ul>
				</div>
			)}
		</div>
	);
}
