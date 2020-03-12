import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Logo, PlayerName, InputToken } from '../navbar';

export default function NavBar() {
	const { pathname } = useLocation();

	return (
		<NavBarWrapper>
			<Logo />
			{pathname === '/' && (
				<div className='player'>
					<PlayerName />
					<InputToken />
				</div>
			)}
			<div>
				<NavLink to='/'>Game</NavLink>
				<NavLink to='/about'>About</NavLink>
			</div>
		</NavBarWrapper>
	);
}

const NavBarWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;

	width: 100%;

	background-color: #d73729;
	color: white;
	border-bottom: 3px solid #b81e26;

	.player {
		display: flex;
	}

	a {
		margin-left: 4rem;
	}
`;
