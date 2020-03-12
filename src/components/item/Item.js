import React from 'react';
import styled from 'styled-components';
import { useDataContext } from '../../contexts/DataContext';

import {
	ButtonExamine,
	ButtonTakeDrop,
	ButtonPrice,
	ButtonSell,
	ButtonWear,
	ButtonTransmogrify,
	ButtonCarry,
} from './';

export default function Item({ item, action, inInventory }) {
	const {
		data: { cooldownOver, autoTravelMode },
	} = useDataContext();

	return (
		<StyledListItem>
			{item}
			{!autoTravelMode && cooldownOver && (
				<>
					<ButtonExamine item={item} />
					<ButtonTakeDrop item={item} action={action} />
					<ButtonPrice item={item} />
					<ButtonSell item={item} />
					<ButtonWear item={item} inInventory={inInventory} />
					<ButtonTransmogrify item={item} />
					<ButtonCarry item={item} inInventory={inInventory} />
				</>
			)}
		</StyledListItem>
	);
}

const StyledListItem = styled.li`
	display: flex;
	align-items: center;
`;
