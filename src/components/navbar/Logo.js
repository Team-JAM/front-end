import React from 'react';
import styled from 'styled-components';

export default function Logo() {
	return (
		<LogoWrapper>
			<StyledLogo></StyledLogo>
			<h1>JAMbda Treasure Hunt</h1>
		</LogoWrapper>
	);
}

const LogoWrapper = styled.div`
	display: flex;
	align-items: center;

	h1 {
		margin-left: 1rem;
		font-size: 2rem;
	}
`;

const StyledLogo = styled.div`
	width: 3rem;
	height: 3rem;
	border-radius: 0.5rem;

	background-size: cover;
	background-image: url('images/teamjam.jfif');
`;
