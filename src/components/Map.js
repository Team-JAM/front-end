import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import MapRow from './MapRow';

export default function Map() {
	const [mapData, setMapData] = useState();

	useEffect(() => {
		axios
			.get('https://team-jam-api.herokuapp.com/api/map')
			.then(res => {
				// console.log(res.data.map);
				setMapData(res.data.map);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<MapWrapper>
			{mapData && mapData.map((row, index) => <MapRow row={row} key={index} />)}
		</MapWrapper>
	);
}

const MapWrapper = styled.div`
	flex-grow: 1;
	overflow: auto;

	background-color: white;
`;
