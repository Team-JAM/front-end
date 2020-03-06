import React from 'react';
// import styled from 'styled-components';
import { useDataContext } from '../contexts/DataContext';
import { useGetBalance } from '../hooks';
import {
	ComponentWrapper,
	StatusHeader,
} from '../styled-components/StyledComponents';

export default function LambdaCoin() {
	const {
		data: { coinBalance, autoTravelMode },
	} = useDataContext();

	const getBalance = useGetBalance();

	const handleClick = () => getBalance();

	return (
		<>
			{!autoTravelMode && (
				<ComponentWrapper>
					<StatusHeader onClick={handleClick}>LAMBDA COIN BALANCE</StatusHeader>
					<p>{coinBalance}</p>
				</ComponentWrapper>
			)}
		</>
	);
}
