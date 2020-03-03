import React from 'react';
// import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import { FooterComponentWrapper } from '../styled-components/StyledComponents';

export default function ItemInfo() {
	const {
		data: { itemInfo },
	} = useDataContext();

	return (
		<FooterComponentWrapper>
			<h4>ITEM INFO</h4>
			<div>
				<p>Name: {itemInfo.name}</p>
				<p>Description: {itemInfo.description}</p>
				<p>Weight: {itemInfo.weight}</p>
				<p>Type: {itemInfo.itemtype}</p>
				<p>Level: {itemInfo.level}</p>
				<p>Exp: {itemInfo.exp}</p>
				<p>Attributes: {itemInfo.attributes}</p>
			</div>
		</FooterComponentWrapper>
	);
}
