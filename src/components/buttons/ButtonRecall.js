import React from 'react';
import { useDataContext } from '../../contexts/DataContext';
import { useRecall } from '../../hooks/useRecall';

export default function ButtonRecall() {
	const {
		data: { playerStatus },
	} = useDataContext();

	const recall = useRecall();

	const canRecall = playerStatus.abilities.includes('recall');

	return <>{canRecall && <button onClick={recall}>Recall</button>}</>;
}
