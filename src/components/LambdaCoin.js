import React, { useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
// import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import {
	ComponentWrapper,
	StatusHeader,
} from '../styled-components/StyledComponents';

export default function LambdaCoin() {
	const {
		data: { coinBalance, autoTravelMode },
		dispatch,
	} = useDataContext();

	const getBalance = () => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.get('/bc/get_balance/')
			.then(res => {
				// console.log(res.data.messages[0]);
				localStorage.setItem('coinBalance', res.data.messages[0]);

				dispatch({
					type: 'GET_BALANCE_SUCCESS',
					payload: res.data.messages[0],
				});
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	};

	// useEffect(() => {
	// 	getBalance();
	// }, []);

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
