import React from 'react';
// import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import { FooterComponentWrapper } from '../styled-components/StyledComponents';
import {
	ButtonsMove,
	ButtonsFly,
	ButtonNameChanger,
	ButtonExamineWell,
	ButtonPray,
	ButtonRecall,
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
					<ButtonsFly />
					<div>
						<ButtonNameChanger />
						<ButtonExamineWell />
						<ButtonPray />
						<ButtonRecall />
					</div>
				</div>
			)}
		</FooterComponentWrapper>
	);
}
