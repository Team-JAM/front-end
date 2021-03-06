import React from 'react';

const SVG = ({
	style = {},
	width = '50px',
	height = '50px',
	className = '',
	// viewBox = '0 0 58 58',
}) => (
	<svg
		viewBox='-25 0 512 512'
		style={style}
		width={width}
		height={height}
		className={`svg-icon ${className || ''}`}
		xmlns='http://www.w3.org/2000/svg'>
		<path
			d='m461.128906 278.9375h-65v-47.363281h-60.226562v-30h90.226562v47.363281h35zm0 0'
			fill='#cabbb7'
		/>
		<path d='m52.390625 142.242188h30v191.804687h-30zm0 0' fill='#804231' />
		<path d='m323.246094 142.242188h30v191.804687h-30zm0 0' fill='#582b1f' />
		<path d='m15.179688 326h375.28125v186h-375.28125zm0 0' fill='#ff7815' />
		<path d='m202.820312 326h187.640626v186h-187.640626zm0 0' fill='#fd4b00' />
		<path d='m187.820312 142.238281h30v60.523438h-30zm0 0' fill='#804231' />
		<path
			d='m405.640625 153.921875h-405.640625l71.761719-153.921875h262.117187zm0 0'
			fill='#c2715a'
		/>
		<path d='m150.320312 187.761719h105v105h-105zm0 0' fill='#4abbef' />
		<path d='m311.570312 404h28.832032v30h-28.832032zm0 0' fill='#582b1f' />
		<path d='m15.179688 404h271.96875v30h-271.96875zm0 0' fill='#804231' />
		<path d='m202.820312 142.238281h15v60.523438h-15zm0 0' fill='#582b1f' />
		<path d='m202.820312 187.761719h52.5v105h-52.5zm0 0' fill='#009be5' />
		<path d='m202.820312 404h84.328126v30h-84.328126zm0 0' fill='#582b1f' />
		<path
			d='m405.640625 153.921875h-202.820313v-153.921875h131.058594zm0 0'
			fill='#af5f49'
		/>
	</svg>
);

export default SVG;
