import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDataContext } from '../contexts/DataContext';
import { ComponentWrapper } from '../styled-components/StyledComponents';

export default function CooldownTimer() {
	const {
		data: { cooldown, cooldownOver, autoTravelMode },
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
		<CooldownWrapper cooldownOver={cooldownOver} timeLeft={timeLeft} autoTravelMode={autoTravelMode}>
			{autoTravelMode ? (
				<>
					<h3>Auto Travel Mode Engaged</h3>
					<p>please stand by</p>
				</>
			) : (
				<>
					<h3>COOLDOWN TIMER</h3>
					<p>Cooldown: {cooldown}</p>
					{timeLeft <= 0 ? <p>Go!</p> : <p>Remaining Time: {timeLeft}</p>}
				</>
			)}
		</CooldownWrapper>
	);
}

const CooldownWrapper = styled(ComponentWrapper)`
	background-color: ${props => {
			if (props.autoTravelMode) return '#33a532'
			return props.timeLeft <= 0 ? '#33a532' : '#cc0605'
		}
	};

	color: white;
`;
