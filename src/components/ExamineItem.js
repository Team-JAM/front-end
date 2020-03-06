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
					<p>
						<span style={{ fontWeight: 'bold' }}>Name:</span> {itemInfo.name}
					</p>
					<div style={{ whiteSpace: 'pre-wrap' }}>
						<p>
							<span style={{ fontWeight: 'bold' }}>Description:</span>{' '}
							{itemInfo.description}
						</p>
					</div>
					{itemInfo.weight && (
						<p>
							<span style={{ fontWeight: 'bold' }}>Weight:</span>{' '}
							{itemInfo.weight}
						</p>
					)}
					{itemInfo.itemtype && (
						<p>
							<span style={{ fontWeight: 'bold' }}>Type:</span>{' '}
							{itemInfo.itemtype}
						</p>
					)}
					{itemInfo.level && (
						<p>
							<span style={{ fontWeight: 'bold' }}>Level:</span>{' '}
							{itemInfo.level}
						</p>
					)}
					{itemInfo.exp && (
						<p>
							<span style={{ fontWeight: 'bold' }}>Exp:</span> {itemInfo.exp}
						</p>
					)}
					{itemInfo.attributes && (
						<p>
							<span style={{ fontWeight: 'bold' }}>Attributes:</span>{' '}
							{itemInfo.attributes}
						</p>
					)}
				</div>
			)}
		</FooterComponentWrapper>
	);
}
