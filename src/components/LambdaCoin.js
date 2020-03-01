import React, { useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
// import styled from 'styled-components';

import { ComponentWrapper } from '../styled-components/StyledComponents';

export default function LambdaCoin() {
	useEffect(() => {
		axiosWithAuth()
			.get('/bc/get_balance')
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<ComponentWrapper>
			<h3>LAMBDA COIN BALANCE</h3>
		</ComponentWrapper>
	);
}
