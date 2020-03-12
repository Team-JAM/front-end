import React from 'react';

const SVG = ({
	style = {},
	width = '50px',
	height = '50px',
	className = '',
	// viewBox = '0 0 58 58',
}) => (
	<svg
		id='Capa_1'
		enable-background='new 0 0 512 512'
		viewBox='0 0 512 512'
		xmlns='http://www.w3.org/2000/svg'
		style={style}
		width={width}
		height={height}
		className={`svg-icon ${className || ''}`}
		preserveAspectRatio='xMidYMid meet'>
		<g>
			<g>
				<path d='m474.209 213.247h30v71.811h-30z' fill='#5b362a' />
			</g>
			<g>
				<path d='m412.463 146.286h30v77.026h-30z' fill='#5b362a' />
			</g>
			<g>
				<path d='m7.791 213.247h30v71.811h-30z' fill='#7d4b3b' />
			</g>
			<g>
				<path d='m69.537 146.286h30v77.026h-30z' fill='#7d4b3b' />
			</g>
			<path
				d='m255.938 512h-248.147v-236.942l248.272-10 9.939 118.609z'
				fill='#fad17f'
			/>
			<path d='m504.209 275.058v236.942h-248.271v-246.942z' fill='#ffb655' />
			<path d='m256.063 275.058v-61.746h186.4l61.746 61.746z' fill='#7d4b3b' />
			<path
				d='m255.938 275.058 10-30.905-10-30.841h-186.401l-61.746 61.746z'
				fill='#a05f4b'
			/>
			<g>
				<path
					d='m297.486 24.662h-26.55v-24.662h-30v24.662h-26.551v30h26.551v95.67h30v-95.67h26.55z'
					fill='#fad17f'
				/>
				<g>
					<path d='m70.505 325.537h30v73.143h-30z' fill='#ffb655' />
				</g>
				<g>
					<path d='m411.366 325.537h30v73.143h-30z' fill='#ff8859' />
				</g>
				<g>
					<path d='m70.505 449.502h30v62.498h-30z' fill='#ffb655' />
				</g>
				<g>
					<path d='m411.366 449.502h30v62.498h-30z' fill='#ff8859' />
				</g>
				<g>
					<path
						d='m270.936 24.662v-24.662h-14.998v150.332h14.998v-95.67h26.55v-30z'
						fill='#ffb655'
					/>
					<g>
						<path
							d='m348.652 192.644v319.356h-185.433v-319.356l92.719-10z'
							fill='#ffe89c'
						/>
					</g>
					<g>
						<path
							d='m255.938 182.644 92.714 10v319.356h-92.714z'
							fill='#fad17f'
						/>
					</g>
					<path
						d='m163.221 192.644 92.717-92.717 10 50.405-10 42.312z'
						fill='#bd8472'
					/>
					<path d='m255.938 192.644v-92.717l92.716 92.717z' fill='#a05f4b' />
				</g>
				<path
					d='m225.03 512v-72.113c0-17.069 13.837-30.905 30.905-30.905 17.069 0 30.905 13.837 30.905 30.905v72.113z'
					fill='#a05f4b'
				/>
				<path
					d='m255.936 408.982c17.069 0 30.905 13.837 30.905 30.905v72.113h-30.904z'
					fill='#7d4b3b'
				/>
				<path
					d='m275.604 285.36-19.669 37.563c-20.746 0-37.563-16.818-37.563-37.563s16.818-37.563 37.563-37.563z'
					fill='#fad17f'
				/>
				<path
					d='m255.936 247.797c20.746 0 37.563 16.818 37.563 37.563s-16.818 37.563-37.563 37.563z'
					fill='#ffb655'
				/>
			</g>
		</g>
	</svg>
);

export default SVG;
