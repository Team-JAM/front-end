import React, { useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
// import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import { ComponentWrapper } from '../styled-components/StyledComponents';

export default function LambdaCoin() {
	const {
		data: { coinBalance },
		dispatch,
	} = useDataContext();

	useEffect(() => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.get('/bc/get_balance/')
			.then(res => {
				// console.log(res.data.messages[0]);
				dispatch({
					type: 'GET_BALANCE_SUCCESS',
					payload: res.data.messages[0],
				});
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	}, []);

	return (
		<ComponentWrapper>
			<h3>LAMBDA COIN BALANCE</h3>
			<p>{coinBalance}</p>
		</ComponentWrapper>
	);
}
