import React from 'react';
import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';
import { FooterComponentWrapper } from '../styled-components/StyledComponents';
import {
	ButtonsMove,
	ButtonNameChanger,
	ButtonBuyDonut,
	ButtonExamineWell,
	ButtonExamineBook,
	ButtonExamineBoard,
	ButtonPray,
	ButtonRecall,
	ButtonWarp,
} from './';

export default function Controls() {
	const {
		data: { cooldownOver, autoTravelMode, playerStatus },
	} = useDataContext();

	const canFly =
		playerStatus.abilities && playerStatus.abilities.includes('fly');

	return (
		<ControlsWrapper>
			<h3>CONTROLS</h3>
			{cooldownOver && !autoTravelMode && (
				<ButtonsWrapper>
					<div className='buttons-move'>
						<ButtonsMove endpoint='move' header='Walk:' />
						{canFly && <ButtonsMove endpoint='fly' header='Fly:' />}
					</div>
					<div className='buttons-abilities'>
						<ButtonPray />
						<ButtonRecall />
						<ButtonBuyDonut />
						<ButtonExamineWell />
						<ButtonExamineBook />
						<ButtonExamineBoard />
						<ButtonNameChanger />
						<ButtonWarp />
					</div>
				</ButtonsWrapper>
			)}
		</ControlsWrapper>
	);
}

const ControlsWrapper = styled(FooterComponentWrapper)`
	width: 22%;
`;

const ButtonsWrapper = styled.div`
	display: flex;
	flex-direction: column;

	.buttons-move {
		display: flex;
		justify-content: space-around;
	}

	.buttons-abilities {
		display: flex;
		justify-content: space-around;
	}
`;
