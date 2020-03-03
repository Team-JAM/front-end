import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import Item from './Item';

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

	const handleUndress = name => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.post(`/adv/undress/`, { name })
			.then(res => {
				// console.log(res.data);
				dispatch({ type: 'GET_STATUS_SUCCESS', payload: res.data });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	};

	return (
		<FooterComponentWrapper>
			<StatusHeader onClick={handleStatus}>INVENTORY</StatusHeader>
			<div>
				{playerStatus.bodywear && (
					<InventoryRow>
						<p>Bodywear: {playerStatus.bodywear}</p>
						<button onClick={() => handleUndress(playerStatus.bodywear)}>
							Undress
						</button>
					</InventoryRow>
				)}
				{playerStatus.footwear && (
					<InventoryRow>
						<p>Footwear: {playerStatus.footwear}</p>
						<button onClick={() => handleUndress(playerStatus.footwear)}>
							Undress
						</button>
					</InventoryRow>
				)}
				{playerStatus.inventory && playerStatus.inventory[0] && (
					<>
						<p>Inventory:</p>
						<ul>
							{playerStatus.inventory.map((item, index) => (
								<Item key={index} item={item} action='Drop' />
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
