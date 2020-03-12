import React from 'react';
import { Dot, LightDot } from '../styled-components/StyledCells';
import Icon from '../icons';

// This component handles which icon should be rendered given conditions
export default function IconHandler({ room, character, title, inShadowWorld }) {
	const {
		isOnPath,
		isDestination,
		isWormhole,
		isSpecialRoom,
		isCurrentRoom,
		isNormal,
		isCave,
		isTrap,
	} = room;

	// Checks if current player is on TeamJAM and renders the appropriate avatar if so, as well as a generic avatar if not
	const characterIcon =
		character === 'allisonJAM' ||
		character === 'JonathanJAM' ||
		character === 'matthewJAM'
			? character
			: 'genericAvatar';

	// Render logic
	const render = {
		dot: isOnPath && !isDestination && !isWormhole && !inShadowWorld,
		lightDot: isOnPath && !isDestination && !isWormhole && inShadowWorld,
		wormhole: isWormhole && !isDestination && !isSpecialRoom && !isCurrentRoom,
		avatar: isCurrentRoom,
		specialRoom: isSpecialRoom,
		normal:
			isNormal && !isSpecialRoom && !isCurrentRoom && !isOnPath && !isWormhole,
		cave:
			isCave && !isCurrentRoom && !isSpecialRoom && !isOnPath && !isWormhole,
		trap: isTrap && !isOnPath && !isWormhole,
	};

	return (
		<>
			{render.dot && <Dot />}
			{render.lightDot && <LightDot />}
			{render.wormhole && (
				<Icon
					name='wormhole'
					style={{
						flexShrink: '0',
						zIndex: '1000',
						width: '4rem',
						height: '4rem',
					}}
				/>
			)}
			{render.avatar && (
				<Icon
					name={characterIcon}
					style={{
						flexShrink: '0',
						zIndex: '1100',
						marginBottom: '0.2rem',
						width: '5.75rem',
						height: '5.75rem',
						position: render.specialRoom ? 'relative' : 'static',
						top: '6rem',
						right: '1.5rem',
					}}
				/>
			)}
			{render.specialRoom && (
				<Icon
					name={title}
					style={{
						flexShrink: '0',
						zIndex: '1000',
						marginBottom: '0.2rem',
					}}
				/>
			)}
			{render.normal && (
				<Icon
					name='normal'
					style={{
						flexShrink: '0',
						width: '1.5rem',
						height: '1.5rem',
						zIndex: '1000',
					}}
				/>
			)}
			{render.cave && (
				<Icon
					name='cave'
					style={{
						flexShrink: '0',
						width: '3.5rem',
						height: '3.5rem',
						marginBottom: '1.5rem',
						zIndex: '1000',
					}}
				/>
			)}
			{render.trap && (
				<Icon
					name='trap'
					style={{
						flexShrink: '0',
						width: '3.5rem',
						height: '3.5rem',
						zIndex: '1000',
					}}
				/>
			)}
		</>
	);
}
