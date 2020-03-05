import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useDataContext } from '../contexts/DataContext';
import MapRow from './MapRow';

export default function Map() {
	const {
		data: { warpMode },
		dispatch,
	} = useDataContext();
	const [mapData, setMapData] = useState();
	const [darkMapData, setDarkMapData] = useState();

	useEffect(() => {
		dispatch({ type: 'GET_DATA_START' });

		axios
			.get('https://team-jam-api.herokuapp.com/api/map')
			.then(res => {
				// console.log(res.data);
				setMapData(res.data.map);
				setDarkMapData(res.data.dark_map);
				dispatch({ type: 'GET_ROOMS_SUCCESS', payload: res.data.rooms });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	}, []);

	return (
		<MapWrapper>
			{!warpMode &&
				mapData &&
				mapData.map((row, index) => <MapRow row={row} key={index} />)}
			{warpMode &&
				darkMapData &&
				darkMapData.map((row, index) => <MapRow row={row} key={index} />)}
		</MapWrapper>
	);
}

const MapWrapper = styled.div`
	min-width: 79vw;
	overflow: auto;

	::-webkit-scrollbar {
		display: none;
	}

	background-color: white;
`;
