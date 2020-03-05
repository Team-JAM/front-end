import React from 'react';
import { useDataContext } from '../contexts/DataContext';
import { ComponentWrapper } from '../styled-components/StyledComponents';

export default function Messages() {
	const {
		data: { roomData },
	} = useDataContext();

	return (
		<>
			{roomData.messages[0] && (
				<ComponentWrapper>
					<h3>MESSAGES</h3>
					<ul>
						{roomData.messages.map((message, index) => (
							<li key={index}>{message}</li>
						))}
					</ul>
				</ComponentWrapper>
			)}
		</>
	);
}
