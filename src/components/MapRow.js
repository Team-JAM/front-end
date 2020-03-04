import React from 'react';
import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import { MapCell, MapCellDark } from './';

export default function MapRow({ row }) {
	const {
		data: { warpMode },
	} = useDataContext();

	return (
		<StyledRow>
			{!warpMode &&
				row &&
				row.map((cell, index) => <MapCell cell={cell} key={index} />)}
			{warpMode &&
				row &&
				row.map((cell, index) => <MapCellDark cell={cell} key={index} />)}
		</StyledRow>
	);
}

const StyledRow = styled.div`
	display: flex;
	// width: 100%;
`;
