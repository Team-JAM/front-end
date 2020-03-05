import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { axiosTeamJamBackEnd } from '../utils/axiosTeamJamBackEnd';
import { useDataContext } from '../contexts/DataContext';
import { specialRooms } from '../data/specialRooms';
import { StyledCell, StyledCellDark } from '../styled-components/StyledCells';

export default function MapCell({ cell }) {
	const {
		data: {
			cooldownOver,
			warpMode,
			roomData,
			roomToFind,
			roomToMine,
			destination,
			path,
		},
		dispatch,
	} = useDataContext();
	const [isOnPath, setIsOnPath] = useState(false);
	const [isDestination, setIsDestination] = useState(false);

	const isRoom = cell !== null;

	const isCurrentRoom =
		roomData.room_id !== null && cell !== null && roomData.room_id === cell.id;

	const specialRoomIDs = Object.values(specialRooms);
	const isSpecialRoom = cell && cell.id && specialRoomIDs.includes(cell.id);

	const miningRoomID = Number(roomToMine.split('Mine your coin in room ')[1]);
	const isMiningRoom = cell && cell.id === miningRoomID;

	const isRoomToFind =
		cell && cell.id === (roomToFind !== '' && Number(roomToFind));

	useEffect(() => {
		setIsDestination(cell && cell.id === destination);
		setIsOnPath(cell && cell.id && path.includes(cell.id));
	}, [cell, destination, path]);

	const handleClick = cell => {
		if (cooldownOver && cell) {
			dispatch({ type: 'GET_DATA_START' });

			const destination_room = cell.id;

			(async () => {
				try {
					const res = await axiosTeamJamBackEnd().post('/get_directions/', {
						starting_room: roomData.room_id,
						destination_room,
					});

					const path = res.data.path.map(room => Number(room[1]));

					dispatch({
						type: 'SET_PATH',
						payload: { destination: path[path.length - 1], path },
					});

					dispatch({ type: 'SET_TRAVEL_MODE_TRUE' });

					const directions = res.data.path_directions;

					const asyncList = [];

					const sleep = ms =>
						new Promise(resolve => {
							setTimeout(resolve, ms);
						});

					for (const direction of directions) {
						const asyncFunction = async () => {
							const cooldown = await handleDirection(direction);
							return cooldown;
						};

						asyncList.push(asyncFunction);
					}

					for (const asyncFunction of asyncList) {
						const cooldown = await asyncFunction();
						await sleep(cooldown * 1000);
					}

					dispatch({ type: 'SET_TRAVEL_MODE_FALSE' });
					dispatch({ type: 'CLEAR_DESTINATION' });
				} catch (err) {
					console.log(err);
					dispatch({ type: 'GET_DATA_FAILURE' });
				}
			})();
		}
	};

	const handleDirection = async directions => {
		dispatch({ type: 'GET_DATA_START' });
		try {
			if (directions[0] === 'fly' || directions[0] === 'move') {
				const [endpoint, direction, next_room_id] = directions;

				const res = await axiosWithAuth().post(`/adv/${endpoint}/`, {
					direction,
					next_room_id,
				});

				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });

				return res.data.cooldown;
			} else if (directions[0] === 'dash') {
				const [endpoint, direction, num_rooms, next_room_ids] = directions;

				const res = await axiosWithAuth().post(`/adv/${endpoint}`, {
					direction,
					num_rooms,
					next_room_ids,
				});

				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });

				return res.data.cooldown;
			} else if (directions[0] === 'recall') {
				const res = await axiosWithAuth().post(`/adv/recall`);

				dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });

				return res.data.cooldown;
			}
		} catch (err) {
			console.log(err);
			dispatch({ type: 'GET_DATA_FAILURE' });
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
					isOnPath={isOnPath}
					isDestination={isDestination}
					terrain={cell && cell.terrain}
					elevation={cell && cell.elevation}
					exitN={cell && cell.exits.n}
					exitS={cell && cell.exits.s}
					exitE={cell && cell.exits.e}
					exitW={cell && cell.exits.w}
					cooldownOver={cooldownOver}
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
					isOnPath={isOnPath}
					isDestination={isDestination}
					terrain={cell && cell.terrain}
					elevation={cell && cell.elevation}
					exitN={cell && cell.exits.n}
					exitS={cell && cell.exits.s}
					exitE={cell && cell.exits.e}
					exitW={cell && cell.exits.w}
					cooldownOver={cooldownOver}
					onClick={() => handleClick(cell)}>
					<div>{cell && cell.id}</div>
					<div>{(isSpecialRoom || isCurrentRoom) && cell.title}</div>
				</StyledCellDark>
			)}
		</>
	);
}
