import React, { useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

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
		<div>
			<h3>LAMBDA COIN BALANCE</h3>
		</div>
	);
}
