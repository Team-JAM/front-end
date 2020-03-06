import React from 'react';
import { useDataContext } from '../contexts/DataContext';
import { useWarp } from '../hooks/useWarp';

export default function ButtonWarp() {
	const {
		data: { playerStatus },
	} = useDataContext();
	const warp = useWarp();

	const canWarp = playerStatus.abilities.includes('warp');

	return <>{canWarp && <button onClick={warp}>Warp</button>}</>;
}
