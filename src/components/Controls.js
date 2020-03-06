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
		data: { cooldownOver, autoTravelMode, playerStatus, treasureMode },
		dispatch,
	} = useDataContext();

	const canFly =
		playerStatus.abilities && playerStatus.abilities.includes('fly');

	function handleToggle() {
		dispatch({ type: 'TOGGLE_TREASURE_MODE' });
	}

	return (
		<ControlsWrapper>
			<h3>CONTROLS</h3>
			{cooldownOver && !autoTravelMode && (
				<ButtonsWrapper>
					<div className='buttons-move'>
						<ButtonsMove endpoint='move' header='Walk:' />
						{canFly && <ButtonsMove endpoint='fly' header='Fly:' />}
					</div>
					<div className='toggle-treasure'>
						<h4>Pick up treasure:</h4>
						<label className='container' onClick={handleToggle}>
							<input type='hidden' name='toggle' value={treasureMode}/>
							<Track className='track' toggle={treasureMode} />
							<ToggleButton className='button' toggle={treasureMode} />
						</label>
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

	.toggle-treasure {
		display: flex;
		justify-content: center;
		align-items: center;

		.container {
			margin-left: 10px;
			position: relative;
			display: inline-block;
			width: 24px;
			height: 14px;
			vertical-align: middle;
			cursor: pointer;
			user-select: none;
		}
	}

	.buttons-abilities {
		display: flex;
		justify-content: space-around;
	}
`;

const Track = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border-radius: 50px;
	background-color: ${props => props.toggle ? '#FFDA44' : '#cccccc'};
`;

const ToggleButton = styled.span`
	position: absolute;
	top: 2px;
	bottom: 2px;
	right: ${props => props.toggle ? '2px' : '11px' };
	left: ${props => props.toggle ? '11px' : '2px'};
	background-color: #fff;
	border-radius: 50px;
	transition: all 100ms ease;
`;