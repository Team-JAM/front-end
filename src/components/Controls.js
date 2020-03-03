import React from 'react';
// import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import { ComponentWrapper } from '../styled-components/StyledComponents';
import { ButtonsMove, ButtonNameChanger, ButtonPray } from './';

export default function Controls() {
	const {
		data: { cooldownOver },
	} = useDataContext();

	return (
		<ComponentWrapper>
			<h3>CONTROLS</h3>
			{cooldownOver && (
				<div>
					<ButtonsMove />
					<ButtonNameChanger />
					<ButtonPray />
				</div>
			)}
		</ComponentWrapper>
	);
}
