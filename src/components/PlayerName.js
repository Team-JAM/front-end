import React from 'react';
import { useDataContext } from '../contexts/DataContext';

export default function PlayerName() {
	const {
		data: { playerStatus },
	} = useDataContext();

	return <>{playerStatus.name && <p>Player: {playerStatus.name}</p>}</>;
}
