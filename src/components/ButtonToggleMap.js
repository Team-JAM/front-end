import React from 'react';
import styled from 'styled-components';
import { useDataContext } from '../contexts/DataContext';

export default function ButtonToggleMap() {
	const {
		data: { playerStatus },
		dispatch,
	} = useDataContext();

	const canWarp = playerStatus.abilities.includes('warp');

	const handleClick = () => {
		dispatch({ type: 'TOGGLE_SHADOW_WORLD_STATUS' });
	};

	return (
		<>
			{canWarp && <StyledButton onClick={handleClick}>Switch Map</StyledButton>}
		</>
	);
}

const StyledButton = styled.button`
	position: absolute;
	margin: 1rem;
	z-index: 1200;
`;
