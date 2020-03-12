import React from 'react';
import styled from 'styled-components';

export default function TeamCard({ member }) {
	const image = `url('/photos/${member.imgPath}')`;

	return (
		<StyledCard>
			<h2>{member.role}</h2>
			<div className='content'>
				<StyledImage image={image} />
				<div className='card-text'>
					{member.linkedinUrl && (
						<a
							href={member.linkedinUrl}
							target='_blank'
							rel='noopener noreferrer'>
							LinkedIn
						</a>
					)}
					{member.githubUrl && (
						<a
							href={member.githubUrl}
							target='_blank'
							rel='noopener noreferrer'>
							GitHub
						</a>
					)}
					{member.portfolioUrl && (
						<a
							href={member.portfolioUrl}
							target='_blank'
							rel='noopener noreferrer'>
							Portfolio
						</a>
					)}
					<h3>
						<span className='jam-red'>{member.name[0]}</span>
						{member.name.slice(1)}
					</h3>
				</div>
			</div>
		</StyledCard>
	);
}

const StyledCard = styled.div`
	background-color: white;
	width: 30rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;

	.content {
		display: flex;
		justify-content: space-between;
	}

	h2 {
		font-size: 1.8rem;
	}

	h3 {
		font-size: 1.5rem;

		.jam-red {
			color: #d73729;
		}
	}

	a {
		color: inherit;
		cursor: pointer;
	}

	.card-text {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}
`;

const StyledImage = styled.div`
	width: 15rem;
	height: 15rem;

	background-image: ${props => props.image};
	background-size: cover;
	margin-right: 1rem;
`;
