import React from 'react';

const SVG = ({
	style = {},
	width = '50px',
	height = '50px',
	className = '',
	// viewBox = '0 0 58 58',
}) => (
	<svg
		viewBox='0 0 128 128'
		style={style}
		width={width}
		height={height}
		className={`svg-icon ${className || ''}`}
		xmlns='http://www.w3.org/2000/svg'>
		<g>
			<path d='m24.336 28h79.328v86h-79.328z' fill='#a4390d' />
			<path d='m39.25 28h49.5v86h-49.5z' fill='#dc4c12' />
			<path d='m52 79.5h24v34.5h-24z' fill='#eaeaf0' />
			<path d='m65.75 79.5v38.5a1.75 1.75 0 0 1 -3.5 0v-38.5z' fill='#a4390d' />
			<path d='m16.08 112.5h95.84v9h-95.84z' fill='#b4b4b8' />
			<path
				d='m103.664 24.128-11.018-17.628h-57.292l-11.018 17.628z'
				fill='#a4390d'
			/>
			<path
				d='m111.92 32.673c-11.59 2.67-29.68 3.93-46.97 3.93h-1.9c-17.29 0-35.38-1.26-46.97-3.93l8.42-15.06h79z'
				fill='#dc4c12'
			/>
			<path
				d='m94.667 25.363h-9.417a1.75 1.75 0 0 1 0-3.5h9.417a1.75 1.75 0 0 1 0 3.5z'
				fill='#a4390d'
			/>
			<path d='m11.25 55.25 6.039 9h93.423l6.038-9z' fill='#eaeaf0' />
			<path
				d='m64.95 38.35h-1.9c-21.8 0-48.339-1.991-57.464-7.578a1.75 1.75 0 1 1 1.828-2.985c6.9 4.225 29.258 7.063 55.636 7.063h1.9c26.378 0 48.737-2.838 55.636-7.063a1.75 1.75 0 1 1 1.828 2.985c-9.125 5.587-35.667 7.578-57.464 7.578z'
				fill='#a4390d'
			/>
		</g>
	</svg>
);

export default SVG;
