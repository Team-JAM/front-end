import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';
import { useDataContext } from '../contexts/DataContext';

import { Item, ButtonUndress } from './';

import {
	FooterComponentWrapper,
	StatusHeader,
} from '../styled-components/StyledComponents';

export default function PlayerInventory() {
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

	const handleStatus = () => getStatus();

	return (
		<FooterComponentWrapper>
			<StatusHeader onClick={handleStatus}>INVENTORY</StatusHeader>
			<div>
				{playerStatus.bodywear && (
					<InventoryRow>
						<p>Bodywear: {playerStatus.bodywear}</p>
						<ButtonUndress item={playerStatus.bodywear} />
					</InventoryRow>
				)}
				{playerStatus.footwear && (
					<InventoryRow>
						<p>Footwear: {playerStatus.footwear}</p>
						<ButtonUndress item={playerStatus.footwear} />
					</InventoryRow>
				)}
				{playerStatus.inventory && playerStatus.inventory[0] && (
					<>
						<p>Inventory:</p>
						<ul>
							{playerStatus.inventory.map((item, index) => (
								<Item
									key={index}
									item={item}
									action='Drop'
									inInventory={true}
								/>
							))}
						</ul>
					</>
				)}
			</div>
		</FooterComponentWrapper>
	);
}

const InventoryRow = styled.div`
	display: flex;
	align-items: center;
`;
