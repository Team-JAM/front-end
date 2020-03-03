import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

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
		<ControlsWrapper>
			<h3>CONTROLS</h3>
			{cooldownOver && (
				<div className='all-buttons'>
					<button onClick={() => handleMove('s')}>S</button>
					<div className='middle-buttons'>
						<button onClick={() => handleMove('w')}>W</button>
						<button onClick={() => handleMove('e')}>E</button>
					</div>
					<button onClick={() => handleMove('n')}>N</button>
				</div>
			)}
		</ControlsWrapper>
	);
}

const ControlsWrapper = styled(ComponentWrapper)`
	.all-buttons {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.middle-buttons {
		width: 15rem;
		display: flex;
		justify-content: space-between;
	}

	button {
		width: 5rem;
		height: 3rem;
	}
`;
