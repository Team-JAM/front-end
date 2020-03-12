import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useDataContext } from '../contexts/DataContext';
import { MapRow, ButtonToggleMap } from './';

export default function Map() {
	const {
		data: { inShadowWorld },
		dispatch,
	} = useDataContext();
	const [mapData, setMapData] = useState();
	const [darkMapData, setDarkMapData] = useState();

	useEffect(() => {
		dispatch({ type: 'GET_DATA_START' });

		// Pulls in map data from Django back-end for both worlds
		axios
			.get('https://team-jam-api.herokuapp.com/api/map')
			.then(res => {
				// console.log(res.data);
				setMapData(res.data.map.reverse());
				setDarkMapData(res.data.dark_map.reverse());
				dispatch({ type: 'GET_ROOMS_SUCCESS', payload: res.data.rooms });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	}, []);

	return (
		<MapWrapper>
			<ButtonToggleMap />
			{!inShadowWorld &&
				mapData?.map((row, index) => <MapRow row={row} key={index} />)}
			{inShadowWorld &&
				darkMapData?.map((row, index) => <MapRow row={row} key={index} />)}
		</MapWrapper>
	);
}

const MapWrapper = styled.div`
	min-width: 79vw;
	overflow: auto;

	background-color: white;
`;
