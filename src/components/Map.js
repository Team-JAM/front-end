import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';

import MapRow from './MapRow';

import { dummyGrid } from '../data/dummyGrid';

export default function Map() {
	// const [mapData, setMapData] = useState();
	const [mapData, setMapData] = useState(dummyGrid);

	useEffect(() => {}, []);

	return (
		<div>
			<h3>MAP</h3>
			{mapData && mapData.map((row, index) => <MapRow row={row} key={index} />)}
		</div>
	);
}
