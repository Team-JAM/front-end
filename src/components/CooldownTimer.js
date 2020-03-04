import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import { ComponentWrapper } from '../styled-components/StyledComponents';

export default function CooldownTimer() {
	const {
		data: { cooldown, cooldownOver },
		dispatch,
	} = useDataContext();

	const [timeLeft, setTimeLeft] = useState(cooldown);

	useEffect(() => {
		setTimeLeft(cooldownOver ? 0 : cooldown);
	}, [cooldownOver]);

	useEffect(() => {
		const myTimeout = setTimeout(() => {
			setTimeLeft(timeLeft - 1);
		}, 1000);

		return () => clearTimeout(myTimeout);
	});

	useEffect(() => {
		if (timeLeft <= 0) {
			dispatch({ type: 'SET_CAN_MOVE_TRUE' });
		}
	}, [timeLeft]);

	return (
		<CooldownWrapper cooldownOver={cooldownOver} timeLeft={timeLeft}>
			<h3>COOLDOWN TIMER</h3>
			<p>Cooldown: {cooldown}</p>
			{timeLeft <= 0 ? <p>Go!</p> : <p>Remaining Time: {timeLeft}</p>}
		</CooldownWrapper>
	);
}

const CooldownWrapper = styled(ComponentWrapper)`
	background-color: ${props => (props.timeLeft <= 0 ? '#33a532' : '#cc0605')};

	color: white;
`;
