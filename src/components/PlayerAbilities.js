import React from 'react';
import styled from 'styled-components';
import { useDataContext } from '../contexts/DataContext';
import { useGetStatus } from '../hooks';
import {
	FooterComponentWrapper,
	StatusHeader,
} from '../styled-components/StyledComponents';

export default function PlayerAbilities() {
	const {
		data: { playerStatus, autoTravelMode },
	} = useDataContext();

	const getStatus = useGetStatus();

	const handleStatus = () => {
		if (!autoTravelMode) {
			getStatus();
		}
	};

	return (
		<AbilitiesWrapper>
			<StatusHeader autoTravelMode={autoTravelMode} onClick={handleStatus}>
				ABILITIES
			</StatusHeader>
			<div>
				<ul>
					{playerStatus.abilities &&
						playerStatus.abilities.map(ability => (
							<li key={ability}>{ability}</li>
						))}
				</ul>
			</div>
		</AbilitiesWrapper>
	);
}

const AbilitiesWrapper = styled(FooterComponentWrapper)`
	width: 10%;
`;
