import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';

export default function ButtonWarp() {
	const {
		data: { playerStatus },
		dispatch,
	} = useDataContext();

	const canWarp = playerStatus.abilities.includes('warp');

	const handleWarp = () => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/adv/warp/')
			.then(res => {
				// console.log(res.data);

				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
				dispatch({
					type: 'SET_SHADOW_WORLD_STATUS',
					payload: res.data.room_id < 500 ? false : true,
				});
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	};

	return <>{canWarp && <button onClick={handleWarp}>Warp</button>}</>;
}
