import React, { useState, useEffect } from 'react';

import { useDataContext } from '../contexts/DataContext';

import {
	ComponentWrapper,
	StatusHeader,
} from '../styled-components/StyledComponents';

export default function() {
	const {
		data: { autoTravelMode },
		dispatch,
	} = useDataContext();
	const [roomToFind, setRoomToFind] = useState('');

	const handleChange = e => setRoomToFind(e.target.value);

	useEffect(() => {
		dispatch({ type: 'SET_ROOM_TO_FIND', payload: roomToFind });
	}, [roomToFind]);

	const handleClick = () => setRoomToFind('');

	return (
		<>
			{!autoTravelMode && (
				<ComponentWrapper>
					<StatusHeader onClick={handleClick}>LOCATE A ROOM</StatusHeader>
					<input
						type='text'
						name='roomToFind'
						value={roomToFind}
						onChange={handleChange}
					/>
				</ComponentWrapper>
			)}
		</>
	);
}
