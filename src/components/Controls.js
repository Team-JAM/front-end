import React from 'react';
import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import { FooterComponentWrapper } from '../styled-components/StyledComponents';
import {
	ButtonsMove,
	ButtonNameChanger,
	ButtonExamineWell,
	ButtonPray,
	ButtonRecall,
} from './';

export default function Controls() {
	const {
		data: { cooldownOver, playerStatus },
	} = useDataContext();

	const canFly = playerStatus.abilities.includes('fly');

	return (
		<FooterComponentWrapper>
			<h3>CONTROLS</h3>
			{cooldownOver && (
				<ButtonsWrapper>
					<div className='buttons-move'>
						<ButtonsMove endpoint='move' header='Walk:' />
						{canFly && <ButtonsMove endpoint='fly' header='Fly:' />}
					</div>
					<div className='buttons-abilities'>
						<ButtonPray />
						<ButtonRecall />
						<ButtonExamineWell />
						<ButtonNameChanger />
					</div>
				</ButtonsWrapper>
			)}
		</FooterComponentWrapper>
	);
}

const ButtonsWrapper = styled.div`
	display: flex;
	flex-direction: column;

	.buttons-move {
		display: flex;
	}

	.buttons-abilities {
		display: flex;
		justify-content: space-around;
	}
`;
