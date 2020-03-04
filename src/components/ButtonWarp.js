import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { useDataContext } from '../contexts/DataContext';

export default function ButtonWarp() {
	const {
		data: { playerStatus, warpMode },
		dispatch,
	} = useDataContext();

	const canWarp = playerStatus.abilities.includes('warp');

	const handleWarp = () => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/adv/warp/')
			.then(res => {
				localStorage.setItem('warp_mode', !warpMode);

				// console.log(res.data);
				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
				dispatch({ type: 'TOGGLE_WARP_MODE' });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	};

	return <>{canWarp && <button onClick={handleWarp}>Warp</button>}</>;
}
