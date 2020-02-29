import React from 'react';

import { Map, RoomInfo, Controls } from './';

export default function Game() {
	return (
		<div>
			<h2>GAME</h2>
			<Map />
			<RoomInfo />
			<Controls />
		</div>
	);
}
