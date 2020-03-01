import React, { useEffect, useState } from 'react';

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
		const myInterval = setInterval(() => {
			setTimeLeft(timeLeft - 1);

			if (timeLeft <= 0) {
				dispatch({ type: 'SET_CAN_MOVE_TRUE' });
			}
		}, 1000);

		return () => clearInterval(myInterval);
	});

	return (
		<ComponentWrapper>
			<h3>COOLDOWN TIMER</h3>
			<p>Cooldown: {cooldown}</p>
			{timeLeft <= 0 ? <p>Go!</p> : <p>Remaining Time: {timeLeft}</p>}
		</ComponentWrapper>
	);
}
