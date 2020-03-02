import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
// import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import { ComponentWrapper } from '../styled-components/StyledComponents';

export default function Controls() {
	const {
		data: { cooldownOver },
		dispatch,
	} = useDataContext();

	const handleMove = direction => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/move/', { direction })
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
		<ComponentWrapper>
			<h3>CONTROLS</h3>
			{cooldownOver && (
				<div>
					<button onClick={() => handleMove('n')}>N</button>
					<div>
						<button onClick={() => handleMove('w')}>W</button>
						<button onClick={() => handleMove('e')}>E</button>
					</div>
					<button onClick={() => handleMove('s')}>S</button>
				</div>
			)}
		</ComponentWrapper>
	);
}
