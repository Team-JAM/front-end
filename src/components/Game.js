import React from 'react';

import {
	CooldownTimer,
	Map,
	RoomInfo,
	PlayerStatus,
	LambdaCoin,
	Controls,
} from './';

export default function Game() {
	return (
		<div>
			<h2>GAME</h2>
			<CooldownTimer />
			<Map />
			<RoomInfo />
			<PlayerStatus />
			<LambdaCoin />
			<Controls />
		</div>
	);
}
