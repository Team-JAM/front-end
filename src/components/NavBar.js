import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { InputToken, SelectMode } from './';

export default function NavBar() {
	return (
		<NavBarWrapper>
			<InputToken />
			<SelectMode />
			<NavLink to='/'>Game</NavLink>
			<NavLink to='/About'>About</NavLink>
		</NavBarWrapper>
	);
}

const NavBarWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	border-bottom: 1px solid silver;
`;
