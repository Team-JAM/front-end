import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

export default function Controls() {
	const {
		data: { roomData, rooms },
		dispatch,
	} = useDataContext();

	const handleMove = direction => {
		dispatch({ type: 'GET_DATA_START' });

		const next_room_id = rooms[roomData.room_id].exits[direction].toString();

		axiosWithAuth()
			.post('/adv/move/', { direction, next_room_id })
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
		<MoveWrapper>
			<div className='all-buttons'>
				<button onClick={() => handleMove('s')}>S</button>
				<div className='middle-buttons'>
					<button onClick={() => handleMove('w')}>W</button>
					<button onClick={() => handleMove('e')}>E</button>
				</div>
				<button onClick={() => handleMove('n')}>N</button>
			</div>
		</MoveWrapper>
	);
}

const MoveWrapper = styled.div`
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
