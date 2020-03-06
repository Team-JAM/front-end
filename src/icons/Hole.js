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
			style={{ fill: '#98A7AE' }}
			d='M512,256c0,37.658-26.728,71.868-70.311,97.165c-46.644,27.094-112.588,43.99-185.689,43.99
	C114.615,397.155,0,333.96,0,256s114.615-141.155,256-141.155c33.092,0,64.711,3.459,93.748,9.759v0.01
	C444.761,145.23,512,196.285,512,256z'
		/>
		<path
			style={{ fill: '#7B888E' }}
			d='M512,256c0,37.658-26.728,71.868-70.311,97.165c-18.495-38.494-38.849-85.274-38.849-104.751
	c0-35.694-19.148-114.78-53.091-123.8C444.761,145.23,512,196.285,512,256z'
		/>
		<path
			style={{ fill: '#332F41' }}
			d='M492.575,310.032C454.113,361.179,362.674,397.155,256,397.155S57.887,361.179,19.425,310.032
	C57.887,258.873,149.326,222.898,256,222.898S454.113,258.873,492.575,310.032z'
		/>
	</svg>
);

export default SVG;