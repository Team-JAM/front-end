import React from 'react';

import { useDataContext } from '../contexts/DataContext';

export default function PlayerInfo() {
	const {
		data: { playerInfo },
	} = useDataContext();

	// console.log(playerInfo);

	return (
		<div>
			<h4>PLAYER INFO</h4>
		</div>
	);
}
