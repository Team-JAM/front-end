import React from 'react';
import { Dot, LightDot } from '../styled-components/StyledCells';
import Icon from '../icons';

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

	const render = {
		dot: isOnPath && !isDestination && !isWormhole && !inShadowWorld,
		lightDod: isOnPath && !isDestination && !isWormhole && inShadowWorld,
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
					name={character}
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
