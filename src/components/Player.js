import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';

export default function Player({ player }) {
	const {
		data: { cooldownOver },
		dispatch,
	} = useDataContext();

	const handleExamine = name => {
		console.log(name);
		// dispatch({ type: 'GET_DATA_START' });

		// axiosWithAuth()
		// 	.post('/examine', { name })
		// 	.then(res => {
		// 		console.log(res.data);
		// 		// dispatch({ type: 'EXAMINE_PLAYER_SUCCESS', payload: res.data });
		// 	})
		// 	.catch(err => {
		// 		console.log(err);
		// 		dispatch({ type: 'GET_DATA_FAILURE' });
		// 	});
	};

	return (
		<li>
			{player}
			{cooldownOver && (
				<button onClick={() => handleExamine(player)}>Examine</button>
			)}
		</li>
	);
}
