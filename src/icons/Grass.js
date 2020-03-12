import React from 'react';

const SVG = ({
	style = {},
	width = '50px',
	height = '50px',
	className = '',
	viewBox = '',
}) => (
	<svg
		version='1.1'
		id='Capa_1'
		xmlns='http://www.w3.org/2000/svg'
		// xmlns:xlink='http://www.w3.org/1999/xlink'
		x='0px'
		y='0px'
		viewBox='0 0 512 512'
		// style='enable-background:new 0 0 512 512;'
		// xml:space='preserve'
		style={style}
		width={width}
		height={height}
		className={`svg-icon ${className || ''}`}
		preserveAspectRatio='xMidYMid meet'>
		<path
			style={{ fill: '#33BC00' }}
			d='M59.915,138.874c0,0,77.469,161.394,77.469,355.067h80.236
	C217.62,493.941,224.076,231.099,59.915,138.874z'
		/>
		<path
			style={{ fill: '#008100' }}
			d='M452.237,138.874c0,0-77.469,161.394-77.469,355.067h-80.236
	C294.532,493.941,288.076,231.099,452.237,138.874z'
		/>
		<path
			style={{ fill: '#015901' }}
			d='M512,286.434c0,0-58.068,69.169-58.068,207.507h-80.236C373.697,493.941,359.828,332.547,512,286.434
	z'
		/>
		<path
			style={{ fill: '#79D60D' }}
			d='M0,286.434c0,0,58.068,69.169,58.068,207.507h80.236C138.303,493.941,152.172,332.547,0,286.434z'
		/>
		<path
			style={{ fill: '#00AC00' }}
			d='M380.185,18.059c0,0-83.925,201.051-83.925,475.882h-80.236
	C216.024,493.941,201.268,170.231,380.185,18.059z'
		/>
	</svg>
);

export default SVG;
