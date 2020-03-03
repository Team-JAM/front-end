import React from 'react';
// import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import { FooterComponentWrapper } from '../styled-components/StyledComponents';
import {
	ButtonsMove,
	ButtonNameChanger,
	ButtonExamineWell,
	ButtonPray,
} from './';

export default function Controls() {
	const {
		data: { cooldownOver },
	} = useDataContext();

	return (
		<FooterComponentWrapper>
			<h3>CONTROLS</h3>
			{cooldownOver && (
				<div>
					<ButtonsMove />
					<div>
						<ButtonNameChanger />
						<ButtonExamineWell />
						<ButtonPray />
					</div>
				</div>
			)}
		</FooterComponentWrapper>
	);
}
