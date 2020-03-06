import React from 'react';
import styled from 'styled-components';
import { useDataContext } from '../contexts/DataContext';
import { useGetStatus } from '../hooks';
import { Item, ButtonUndress, ButtonSellAllItems } from './';
import {
	FooterComponentWrapper,
	StatusHeader,
} from '../styled-components/StyledComponents';

export default function PlayerInventory() {
	const {
		data: { playerStatus, autoTravelMode },
	} = useDataContext();

	const getStatus = useGetStatus();

	const handleStatus = () => {
		if (!autoTravelMode) {
			getStatus();
		}
	};

	return (
		<InventoryWrapper>
			<StatusHeader autoTravelMode={autoTravelMode} onClick={handleStatus}>
				INVENTORY
			</StatusHeader>
			<ButtonSellAllItems />
			<div>
				{playerStatus.bodywear && (
					<InventoryRow>
						<p>Bodywear: {playerStatus.bodywear}</p>
						{!autoTravelMode && <ButtonUndress item={playerStatus.bodywear} />}
					</InventoryRow>
				)}
				{playerStatus.footwear && (
					<InventoryRow>
						<p>Footwear: {playerStatus.footwear}</p>
						{!autoTravelMode && <ButtonUndress item={playerStatus.footwear} />}
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
		</InventoryWrapper>
	);
}

const InventoryWrapper = styled(FooterComponentWrapper)`
	width: 25%;
`;

const InventoryRow = styled.div`
	display: flex;
	align-items: center;
`;
