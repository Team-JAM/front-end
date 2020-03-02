import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import MapRow from './MapRow';

import { dummyGrid } from '../data/dummyGrid';

export default function Map() {
	// const [mapData, setMapData] = useState();
	const [mapData, setMapData] = useState(dummyGrid);

	useEffect(() => {}, []);

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
