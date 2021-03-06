import React from 'react';

const SVG = ({
	style = {},
	width = '50px',
	height = '50px',
	className = '',
	// viewBox = '0 0 58 58',
}) => (
	<svg
		version='1.1'
		id='Capa_1'
		xmlns='http://www.w3.org/2000/svg'
		// xmlns:xlink='http://www.w3.org/1999/xlink'
		x='0px'
		y='0px'
		viewBox='0 0 512 512'
		style={style}
		width={width}
		height={height}
		className={`svg-icon ${className || ''}`}
		// style='enable-background:new 0 0 512 512;'
		// xml:space='preserve'>
	>
		<rect x='15' y='50' style={{ fill: '#A17852' }} width='71' height='30' />
		<polygon
			style={{ fill: '#715539' }}
			points='512,180 448.358,180 413.357,80 301,80 301,50 434.642,50 469.642,150 512,150 '
		/>
		<path style={{ fill: '#FFEC97' }} d='M317,130H71V0h246V130z' />
		<rect x='194' style={{ fill: '#FFC473' }} width='123' height='130' />
		<rect x='182' style={{ fill: '#EE2500' }} width='30' height='130' />
		<rect x='232' style={{ fill: '#A01700' }} width='30' height='305' />
		<rect x='132' style={{ fill: '#FF4F19' }} width='30' height='130' />
		<rect x='358' y='37' style={{ fill: '#FF9A00' }} width='30' height='260' />
		<rect y='37' style={{ fill: '#FFD400' }} width='30' height='260' />
		<path style={{ fill: '#A17852' }} d='M388,512H0V282h388V512z' />
		<rect
			x='194'
			y='282'
			style={{ fill: '#715539' }}
			width='194'
			height='230'
		/>
		<rect x='15' y='352' style={{ fill: '#FFEC97' }} width='143' height='30' />
		<g>
			<rect
				x='208'
				y='352'
				style={{ fill: '#FFC473' }}
				width='104'
				height='30'
			/>
			<rect
				x='291'
				y='419'
				style={{ fill: '#FFC473' }}
				width='81'
				height='30'
			/>
		</g>
		<rect x='124' y='419' style={{ fill: '#FFEC97' }} width='113' height='30' />
		<rect x='194' y='419' style={{ fill: '#FFC473' }} width='43' height='30' />
	</svg>
);

export default SVG;
