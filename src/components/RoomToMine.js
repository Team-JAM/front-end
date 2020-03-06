import React from 'react';
import { useDataContext } from '../contexts/DataContext';
import { ComponentWrapper } from '../styled-components/StyledComponents';

export default function RoomToMine() {
	const {
		data: { roomToMine, roomWithSnitch, autoTravelMode },
	} = useDataContext();

	// useEffect(() => {
	// 	localStorage.setItem('roomToMine', roomToMine);
	// }, [roomToMine]);

	return (
		<>
			{!autoTravelMode && (
				<ComponentWrapper>
					<h3>KEY ROOMS</h3>
					{roomToMine && <p>{roomToMine}</p>}
					{roomWithSnitch && <p>{roomWithSnitch}</p>}
				</ComponentWrapper>
			)}
		</>
	);
}
