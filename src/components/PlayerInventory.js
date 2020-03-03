import React from 'react';
// import { axiosWithAuth } from '../utils/axiosWithAuth';
// import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import Item from './Item';

import { FooterComponentWrapper } from '../styled-components/StyledComponents';

export default function PlayerInventory() {
	const {
		data: { playerStatus },
		// dispatch,
	} = useDataContext();

	// const getStatus = () => {
	// 	dispatch({ type: 'GET_DATA_START' });

	// 	axiosWithAuth()
	// 		.post('/adv/status')
	// 		.then(res => {
	// 			// console.log(res.data);
	// 			dispatch({ type: 'GET_STATUS_SUCCESS', payload: res.data });
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 			dispatch({ type: 'GET_DATA_FAILURE' });
	// 		});
	// };

	// const handleClick = () => getStatus();

	return (
		<FooterComponentWrapper>
			<h3>INVENTORY</h3>
			{/* <button onClick={handleClick}>Update</button> */}
			<div>
				<p>Bodywear: {playerStatus.bodywear}</p>
				<p>Footwear: {playerStatus.footwear}</p>
				<p>Inventory:</p>
				<ul>
					{playerStatus.inventory &&
						playerStatus.inventory.map((item, index) => (
							<Item key={index} item={item} action='drop' />
						))}
				</ul>
			</div>
		</FooterComponentWrapper>
	);
}
