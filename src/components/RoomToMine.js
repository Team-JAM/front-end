import React, { useEffect } from 'react';

import { useDataContext } from '../contexts/DataContext';

import { ComponentWrapper } from '../styled-components/StyledComponents';

export default function RoomToMine() {
	const {
		data: { roomToMine },
	} = useDataContext();

	useEffect(() => {
		localStorage.setItem('roomToMine', roomToMine);
	}, [roomToMine]);

	return (
		<>
			{roomToMine && (
				<ComponentWrapper>
					<h3>ROOM TO MINE</h3>
					<p>{roomToMine}</p>
				</ComponentWrapper>
			)}
		</>
	);
}
