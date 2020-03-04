import React from 'react';
// import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import {
	FooterComponentWrapper,
	StatusHeader,
} from '../styled-components/StyledComponents';

export default function ExamineItem() {
	const {
		data: { itemInfo },
		dispatch,
	} = useDataContext();

	const handleClick = () => {
		dispatch({ type: 'RESET_ITEM_INFO' });
	};

	return (
		<FooterComponentWrapper>
			<StatusHeader onClick={handleClick}>EXAMINE</StatusHeader>
			{itemInfo.name && (
				<div>
					<p>Name: {itemInfo.name}</p>
					<p>Description: {itemInfo.description}</p>
					<p>Weight: {itemInfo.weight}</p>
					<p>Type: {itemInfo.itemtype}</p>
					<p>Level: {itemInfo.level}</p>
					<p>Exp: {itemInfo.exp}</p>
					<p>Attributes: {itemInfo.attributes}</p>
				</div>
			)}
		</FooterComponentWrapper>
	);
}
