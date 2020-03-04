import React from 'react';
// import { axiosTeamJamBackEnd } from '../utils/axiosTeamJamBackEnd';
import { useDataContext } from '../contexts/DataContext';
import { specialRooms } from '../data/specialRooms';
import { StyledCell, StyledCellDark } from '../styled-components/StyledCells';

export default function MapCell({ cell }) {
	const {
		data: { warpMode, roomData, roomToFind, roomToMine },
	} = useDataContext();

	const isRoom = cell !== null;

	const isCurrentRoom =
		roomData.room_id !== null && cell !== null && roomData.room_id === cell.id;

	const specialRoomIDs = Object.values(specialRooms);
	const isSpecialRoom = cell && cell.id && specialRoomIDs.includes(cell.id);

	const miningRoomID = Number(roomToMine.split('Mine your coin in room ')[1]);
	const isMiningRoom = cell && cell.id === miningRoomID;

	const isRoomToFind =
		cell && cell.id === (roomToFind !== '' && Number(roomToFind));

	const handleClick = cell => {
		if (cell) {
			const destination_room = cell.id;
			console.log(roomData.room_id);
			console.log(destination_room);
			console.log(localStorage.getItem('token'));

			// axiosTeamJamBackEnd()
			// 	.post('/get_directions/', {
			// 		starting_room: roomData.room_id,
			// 		destination_room,
			// 		token: localStorage.getItem('token'),
			// 	})
			// 	.then(res => {
			// 		console.log(res);
			// 	})
			// 	.catch(err => {
			// 		console.log(err);
			// 	});
		}
	};

	return (
		<>
			{!warpMode && (
				<StyledCell
					isRoom={isRoom}
					isCurrentRoom={isCurrentRoom}
					isSpecialRoom={isSpecialRoom}
					isMiningRoom={isMiningRoom}
					isRoomToFind={isRoomToFind}
					terrain={cell && cell.terrain}
					elevation={cell && cell.elevation}
					exitN={cell && cell.exits.n}
					exitS={cell && cell.exits.s}
					exitE={cell && cell.exits.e}
					exitW={cell && cell.exits.w}
					onClick={() => handleClick(cell)}>
					<div>{cell && cell.id}</div>
					<div>{(isSpecialRoom || isCurrentRoom) && cell.title}</div>
				</StyledCell>
			)}
			{warpMode && (
				<StyledCellDark
					isRoom={isRoom}
					isCurrentRoom={isCurrentRoom}
					isSpecialRoom={isSpecialRoom}
					isMiningRoom={isMiningRoom}
					isRoomToFind={isRoomToFind}
					terrain={cell && cell.terrain}
					elevation={cell && cell.elevation}
					exitN={cell && cell.exits.n}
					exitS={cell && cell.exits.s}
					exitE={cell && cell.exits.e}
					exitW={cell && cell.exits.w}
					onClick={() => handleClick(cell)}>
					<div>{cell && cell.id}</div>
					<div>{(isSpecialRoom || isCurrentRoom) && cell.title}</div>
				</StyledCellDark>
			)}
		</>
	);
}
