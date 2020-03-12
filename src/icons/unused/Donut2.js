import React from 'react';

const SVG = ({
	style = {},
	width = '50px',
	height = '50px',
	className = '',
	// viewBox = '0 0 58 58',
}) => (
	<svg
		id='Layer_3'
		enable-background='new 0 0 64 64'
		viewBox='0 0 64 64'
		style={style}
		width={width}
		height={height}
		className={`svg-icon ${className || ''}`}
		xmlns='http://www.w3.org/2000/svg'>
		<g>
			<path d='m4 20h56v42h-56z' fill='#c7e2fc' />
			<path
				d='m4 49.817c4.02 1.403 8.404 2.183 13 2.183 19.33 0 35-13.655 35-30.5 0-.503-.016-1.003-.044-1.5h-47.956z'
				fill='#ebf7fe'
			/>
			<path d='m4 30h20v32h-20z' fill='#8892a0' />
			<path
				d='m4 54.969c.172.007.341.031.514.031 8.396 0 15.202-8.085 15.202-18.059 0-2.46-.417-4.804-1.167-6.941h-14.549z'
				fill='#c1c8d1'
			/>
			<path d='m24 45h36v4h-36z' fill='#4d5d7a' />
			<path d='m2 12h60v8h-60z' fill='#4d5d7a' />
			<path
				d='m32 2c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm0 24c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z'
				fill='#efbe9a'
			/>
			<path
				d='m32 2c-8.158 0-14.876 6.11-15.862 14h1.362c.828 0 1.5.672 1.5 1.5v1c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5.672-1.5 1.5-1.5h.5l.07-.004c.495-3.943 3.853-6.996 7.93-6.996 3.732 0 6.858 2.559 7.742 6.016l.258-.016h1.5c.828 0 1.5.672 1.5 1.5v1c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5.672-1.5 1.5-1.5h.45c-.519-8.368-7.451-15-15.95-15z'
				fill='#f097d0'
			/>
			<circle cx='10' cy='47' fill='#4d5d7a' r='2' />
			<g fill='#815643'>
				<circle cx='22' cy='13' r='1' />
				<circle cx='24' cy='9' r='1' />
				<circle cx='28' cy='6' r='1' />
				<circle cx='34' cy='7' r='1' />
				<circle cx='39.5' cy='9.5' r='.5' />
				<circle cx='42' cy='13' r='1' />
			</g>
		</g>
	</svg>
);

export default SVG;
