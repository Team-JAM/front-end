import React from 'react';

import { useDataContext } from '../contexts/DataContext';

import { ComponentWrapper } from '../styled-components/StyledComponents';

export default function Messages() {
	const {
		data: { roomData },
	} = useDataContext();

	return (
		<ComponentWrapper>
			<h3>MESSAGES</h3>
			<ul>
				{roomData.messages &&
					roomData.messages.map(message => <li key={message}>{message}</li>)}
			</ul>
		</ComponentWrapper>
	);
}