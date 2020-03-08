import React from 'react';
import styled from 'styled-components';
// import Pusher from 'pusher-js';

import { Map, PanelRight, Footer } from './';

export default function Game() {
	// useEffect(() => {
	// Pusher.logToConsole = process.env.NODE_ENV === 'development';

	// const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
	// 	cluster: process.env.REACT_APP_PUSHER_CLUSTER,
	// });

	// const token = localStorage.getItem('token');

	// const channel = pusher.subscribe(`channel-${token}`);

	// 	// run cb when specified event fires
	// 	// channel.bind('move', moveHandler)
	// }, []);

	return (
		<div>
			<GameWrapper>
				<Map />
				<PanelRight />
			</GameWrapper>
			<Footer />
		</div>
	);
}

const GameWrapper = styled.div`
	display: flex;
	height: 65vh;
`;
