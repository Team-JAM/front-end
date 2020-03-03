import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
// import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import {
	FooterComponentWrapper,
	StatusHeader,
} from '../styled-components/StyledComponents';

export default function PlayerAbilities() {
	const {
		data: { playerStatus },
		dispatch,
	} = useDataContext();

	const getStatus = () => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post('/adv/status')
			.then(res => {
				// console.log(res.data);
				dispatch({ type: 'GET_STATUS_SUCCESS', payload: res.data });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	};

	const handleClick = () => getStatus();

	return (
		<FooterComponentWrapper>
			<StatusHeader onClick={handleClick}>ABILITIES</StatusHeader>
			<div>
				<ul>
					{playerStatus.abilities &&
						playerStatus.abilities.map(ability => (
							<li key={ability}>{ability}</li>
						))}
				</ul>
			</div>
		</FooterComponentWrapper>
	);
}
