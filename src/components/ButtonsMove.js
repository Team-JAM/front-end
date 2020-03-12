import React from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDataContext } from '../contexts/DataContext';

export default function ButtonsMove({ endpoint, header }) {
	const {
		data: { roomData, rooms },
		dispatch,
	} = useDataContext();

	const exitsObj = rooms && rooms[roomData.room_id]?.exits;
	const exitsArr = exitsObj && Object.keys(exitsObj);

	const handleMove = direction => {
		dispatch({ type: 'GET_DATA_START' });

		if (exitsObj) {
			if (exitsObj[direction] !== null) {
				const next_room_id = exitsObj[direction].toString();

				axiosWithAuth()
					.post(`/adv/${endpoint}/`, { direction, next_room_id })
					.then(res => {
						// console.log(res.data);
						dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
					})
					.catch(err => {
						console.log(err);
						dispatch({ type: 'GET_DATA_FAILURE' });
					});
			}
		} else {
			axiosWithAuth()
				.post(`/adv/${endpoint}/`, { direction })
				.then(res => {
					// console.log(res.data);
					dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
				})
				.catch(err => {
					console.log(err);
					dispatch({ type: 'GET_DATA_FAILURE' });
				});
		}
	};

	return (
		<MoveWrapper>
			<h4>{header}</h4>
			<div className='all-buttons'>
				<MoveButton exits={exitsArr} exit='n' onClick={() => handleMove('n')}>
					N
				</MoveButton>
				<div className='middle-buttons'>
					<MoveButton exits={exitsArr} exit='w' onClick={() => handleMove('w')}>
						W
					</MoveButton>
					<MoveButton exits={exitsArr} exit='e' onClick={() => handleMove('e')}>
						E
					</MoveButton>
				</div>
				<MoveButton exits={exitsArr} exit='s' onClick={() => handleMove('s')}>
					S
				</MoveButton>
			</div>
		</MoveWrapper>
	);
}

const MoveWrapper = styled.div`
	padding: 1rem;
	margin-bottom: 1rem;

	.all-buttons {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.middle-buttons {
		width: 12rem;
		display: flex;
		justify-content: space-between;
	}
`;

const MoveButton = styled.button`
	width: 4rem;
	height: 2.5rem;

	opacity: ${props =>
		props.exits && !props.exits.includes(props.exit) && '0.5'};
	cursor: ${props =>
		props.exits && !props.exits.includes(props.exit) && 'default'};
`;
