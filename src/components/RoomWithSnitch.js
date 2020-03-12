import React from 'react';
import { useDataContext } from '../contexts/DataContext';
import { ComponentWrapper } from '../styled-components/StyledComponents';

export default function RoomWithSnitch() {
	const {
		data: { roomWithSnitch, autoTravelMode },
	} = useDataContext();

	return (
		<>
			{!autoTravelMode && roomWithSnitch && (
				<ComponentWrapper>
					<h3>ROOM WITH SNITCH</h3>
					<p>{roomWithSnitch}</p>
				</ComponentWrapper>
			)}
		</>
	);
}
