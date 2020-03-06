import React from 'react';
import styled from 'styled-components';

export default function IconAttrib() {
	return (
		<StyledIconAttrib>
			Icons made by{' '}
			<a href='https://www.flaticon.com/authors/smashicons' title='Smashicons'>
				Smashicons
			</a>
			{', '}
			<a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
				Freepik
			</a>
			{', '}
			<a
				href='https://www.flaticon.com/authors/nikita-golubev'
				title='Nikita Golubev'>
				Nikita Golubev
			</a>
			{', '}
			<a
				href='https://www.flaticon.com/authors/dinosoftlabs'
				title='DinosoftLabs'>
				DinosoftLabs
			</a>
			{', '}
			<a href='https://www.flaticon.com/authors/nhor-phai' title='Nhor Phai'>
				Nhor Phai
			</a>
			{', '}
			<a
				href='https://www.flaticon.com/authors/photo3idea-studio'
				title='photo3idea_studio'>
				photo3idea_studio
			</a>
			{', '}
			<a href='https://www.flaticon.com/authors/monkik' title='monkik'>
				monkik
			</a>
			{', '}
			<a
				href='https://www.flaticon.com/authors/smalllikeart'
				title='smalllikeart'>
				smalllikeart
			</a>
			{', '}
			<a href='https://www.flaticon.com/authors/good-ware' title='Good Ware'>
				Good Ware
			</a>
			{', '}
			<a
				href='https://www.flaticon.com/authors/pixelmeetup'
				title='Pixelmeetup'>
				Pixelmeetup
			</a>
			{', '}
			<a href='https://www.flaticon.com/authors/skyclick' title='Skyclick'>
				Skyclick
			</a>
			{', '}
			<a href='https://www.flaticon.com/authors/surang' title='surang'>
				surang
			</a>
			{', and '}
			<a href='https://www.flaticon.com/authors/payungkead' title='Payungkead'>
				Payungkead
			</a>{' '}
			from{' '}
			<a href='https://www.flaticon.com/' title='Flaticon'>
				www.flaticon.com
			</a>
		</StyledIconAttrib>
	);
}

const StyledIconAttrib = styled.div`
	margin-top: 10rem;
	padding: 0 2rem;

	text-align: right;
	font-size: 1.2rem;

	a {
		color: #d73729;
	}
`;
