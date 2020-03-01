import React from 'react';

import { useDataContext } from '../contexts/DataContext';

export default function ItemInfo() {
	const {
		data: { itemInfo },
	} = useDataContext();

	return (
		<div>
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
		</div>
	);
}
