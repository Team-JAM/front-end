import React from 'react';

import {
	CooldownTimer,
	Map,
	RoomInfo,
	PlayerStatus,
	LambdaCoin,
	Controls,
	ItemInfo,
	PlayerInfo,
} from './';

export default function Game() {
	return (
		<div>
			<h2>GAME</h2>
			<Map />
			<CooldownTimer />
			<RoomInfo />
			<PlayerStatus />
			<LambdaCoin />
			<Controls />
			<ItemInfo />
			<PlayerInfo />
		</div>
	);
}
