import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Logo, InputToken, SelectMode } from './';

export default function NavBar() {
	return (
		<NavBarWrapper>
			<Logo />
			<InputToken />
			<SelectMode />
			<NavLink to='/'>Game</NavLink>
			<NavLink to='/About'>About</NavLink>
		</NavBarWrapper>
	);
}

const NavBarWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;

	background-color: #d73729;
	color: #fdf5ea;
	border-bottom: 2px solid #b81e26;
`;
