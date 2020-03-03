import React from 'react';
// import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import { FooterComponentWrapper } from '../styled-components/StyledComponents';

export default function PlayerAbilities() {
	const {
		data: { playerStatus },
	} = useDataContext();

	return (
		<FooterComponentWrapper>
			<h3>ABILITIES</h3>
			<div>
				<ul>
					{playerStatus.abilities &&
						playerStatus.abilities.map(ability => (
							<li key={ability}>{ability}</li>
						))}
				</ul>
			</div>
		</FooterComponentWrapper>
	);
}
