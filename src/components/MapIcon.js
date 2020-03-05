import React from 'react';
import Icon from '../icons';
// import { specialRooms } from '../data/specialRooms';

export default function MapIcon({ title }) {
	return (
		<Icon
			name={title}
			style={{ flexShrink: '0', zIndex: '1000', marginBottom: '0.5rem' }}
		/>
	);
}
