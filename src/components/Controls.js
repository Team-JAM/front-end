import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { useDataContext } from '../contexts/DataContext';

export default function Controls() {
	const {
		data: { canMove },
		dispatch,
	} = useDataContext();

	const handleMove = direction => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/adv/move/', { direction })
			.then(res => {
				// console.log(res.data);
				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	};

	return (
		<div>
			<h3>CONTROLS</h3>
			{canMove && (
				<div>
					<button onClick={() => handleMove('n')}>N</button>
					<div>
						<button onClick={() => handleMove('w')}>W</button>
						<button onClick={() => handleMove('e')}>E</button>
					</div>
					<button onClick={() => handleMove('s')}>S</button>
				</div>
			)}
		</div>
	);
}
