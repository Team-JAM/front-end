import React from 'react';
import styled from 'styled-components';
import { useDataContext } from '../contexts/DataContext';

import {
	ButtonExamine,
	ButtonTakeDrop,
	ButtonPrice,
	ButtonSell,
	ButtonWear,
} from './';

export default function Item({ item, action, inInventory }) {
	const {
		data: { cooldownOver },
	} = useDataContext();

	return (
		<StyledListItem>
			{item}
			{cooldownOver && (
				<>
					<ButtonExamine item={item} />
					<ButtonTakeDrop item={item} action={action} />
					<ButtonPrice item={item} />
					<ButtonSell item={item} />
					<ButtonWear item={item} inInventory={inInventory} />
				</>
			)}
		</StyledListItem>
	);
}

const StyledListItem = styled.li`
	display: flex;
	align-items: center;
`;
