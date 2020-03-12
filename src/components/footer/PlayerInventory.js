import React from 'react';
import styled from 'styled-components';
import { useDataContext } from '../../contexts/DataContext';
import { useGetStatus } from '../../hooks';
import { Item, ButtonUndress, ButtonSellAllItems } from '..';
import {
	FooterComponentWrapper,
	StatusHeader,
} from '../../styled-components/StyledComponents';

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
			<div style={{ marginTop: '0.5rem' }}>
				{playerStatus.bodywear && (
					<InventoryRow>
						<p>
							<span style={{ fontWeight: 'bold' }}>Bodywear:</span>{' '}
							{playerStatus.bodywear}
						</p>
						{!autoTravelMode && <ButtonUndress item={playerStatus.bodywear} />}
					</InventoryRow>
				)}
				{playerStatus.footwear && (
					<InventoryRow>
						<p>
							<span style={{ fontWeight: 'bold' }}>Footwear:</span>{' '}
							{playerStatus.footwear}
						</p>
						{!autoTravelMode && <ButtonUndress item={playerStatus.footwear} />}
					</InventoryRow>
				)}
				{playerStatus.inventory?.[0] && (
					<>
						<span style={{ fontWeight: 'bold' }}>
							<p>Inventory:</p>
						</span>
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
