import React from 'react';

const SVG = ({
	style = {},
	width = '50px',
	height = '50px',
	className = '',
	viewBox = '0 0 58 58',
}) => (
	<svg
		version='1.1'
		id='Capa_1'
		xmlns='http://www.w3.org/2000/svg'
		// xmlns:xlink='http://www.w3.org/1999/xlink'
		x='0px'
		y='0px'
		// xml:space='preserve'
		style={style}
		width={width}
		height={height}
		viewBox={viewBox}
		className={`svg-icon ${className || ''}`}
		preserveAspectRatio='xMidYMid meet'>
		<rect x='2' y='30.5' style={{ fill: 'EFE7D5' }} width='17' height='23' />
		<rect x='39' y='30.5' style={{ fill: 'EFE7D5' }} width='17' height='23' />
		<path
			style={{ fill: '#6F6A93' }}
			d='M46,22.5h-6h-1H19c-0.675,0-1.35,0-2,0c-2.72,0-5,0-5,0c-6.292,7.5-12,7-12,7
c1.281,1.281,3.017,2,4.828,2c0,0,7.899,0,14.172,0v-7h20v7h14.172c1.811,0,3.548-0.719,4.828-2C58,29.5,52.292,30,46,22.5z'
		/>
		<path
			style={{ fill: '#6F6A93' }}
			d='M29,13.5h16.172c1.811,0,3.548-0.719,4.828-2l0,0c0,0-5.708,0.5-12-7h-9h-9c-6.292,7.5-12,7-12,7l0,0
c1.281,1.281,3.017,2,4.828,2H29z'
		/>
		<path
			style={{ fill: '#A28BB4' }}
			d='M29,22.5h22.172c1.811,0,3.548-0.719,4.828-2c0,0-5.708,0.5-12-7H29H15c-6.292,7.5-12,7-12,7
c1.281,1.281,3.017,2,4.828,2H29z'
		/>
		<path
			style={{ fill: '#554658' }}
			d='M15,53.5H6V38.317l0,0c3.633-2.422,5.367-2.422,9,0l0,0V53.5z'
		/>
		<path
			style={{ fill: '#554658' }}
			d='M52,53.5h-9V38.317l0,0c3.633-2.422,5.367-2.422,9,0l0,0V53.5z'
		/>
		<rect x='17' y='24.5' style={{ fill: '#E2DBCA' }} width='24' height='29' />
		<path
			style={{ fill: '#BAB097' }}
			d='M39,53.5H19V29.317l0,0c3.633-2.422,16.367-2.422,20,0l0,0V53.5z'
		/>
		<path
			style={{ fill: '#554658' }}
			d='M23,53.5V32.061c1.334-0.294,3.356-0.561,6-0.561s4.666,0.267,6,0.561V53.5H23z'
		/>
	</svg>
);

export default SVG;
