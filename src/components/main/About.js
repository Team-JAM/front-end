import React from 'react';
import styled from 'styled-components';
import { IconAttrib, TeamCard, teamInfo } from '../team';
import { aboutGrid } from '../../data/aboutGrid';
import MapRow from '../MapRow';

export default function About() {
	return (
		<AboutWrapper>
			<div className='top-content'>
				<div className='top-content-left'>
					{aboutGrid.map((row, index) => (
						<MapRow row={row} key={index} />
					))}
				</div>
				<div className='top-content-text'>
					<h2>The Game</h2>
					<p>
						JAMbda Treasure Hunt is a{' '}
						<span className='bold'>Multi-User Dungeon Role-Playing Game</span>{' '}
						where players compete with one another to traverse an island maze,
						solve puzzles, unearth powerful artifacts, and more!
					</p>
					<p>
						Players explore a 1000-room map seeking treasure, equipment, and
						information. Along the way, they visit shrines to grow their skills
						and abilities, acquire gear to enhance their strength and speed,
						engage in interdimensional travel, and eat a whole lot of donuts...
						all in pursuit of the elusive Golden Snitch!
					</p>
					<p>
						Navigating JAMbda Treasure Hunt requires an understanding of a
						variety of topics in <span className='bold'>Computer Science</span>,
						including{' '}
						<span className='bold'>Algorithms and Data Structures</span>,{' '}
						<span className='bold'>Blockchain Technology</span>,{' '}
						<span className='bold'>Graph Theory</span>, and{' '}
						<span className='bold'>Computer Architecture</span>.
					</p>
					<h2 style={{ marginTop: '5rem' }}>The Tech Stack</h2>
					<p>
						JAMbda Treasure Hunt is built as a full-stack application with{' '}
						<span className='bold'>back-end</span> and{' '}
						<span className='bold'>front-end</span> architecture.
					</p>
					<p>
						The <span className='bold'>Django-Python back-end</span> houses the
						map graph, an <span className='bold'>8-bit computer emulator</span>{' '}
						used for decoding machine code instructions, pathing logic, and
						other algorithms, and is deployed on{' '}
						<span className='bold'>Heroku</span>.
					</p>
					<p>
						The <span className='bold'>ReactJS front-end</span> uses{' '}
						<span className='bold'>React Router</span> for routing,{' '}
						<span className='bold'>Axios</span> for data fetching,{' '}
						<span className='bold'>Context API</span> for state management,{' '}
						<span className='bold'>Styled-Components</span> for styling, and{' '}
						<span className='bold'>Dotenv</span> for environmental variables and
						secrets, and is deployed on <span className='bold'>Netlify</span>.
					</p>
					<IconAttrib />
				</div>
				<div className='top-content-right'>
					{aboutGrid.map((row, index) => (
						<MapRow row={row} key={index} />
					))}
				</div>
			</div>
			<TeamWrapper>
				<div className='team-content'>
					<div className='team-text'>
						<h2>The Team</h2>
						<p>
							TeamJAM is a cross-disciplinary team comprised of two Full-Stack
							Developers and a Data Scientist.
						</p>
					</div>
					{teamInfo.map(member => (
						<TeamCard key={member.name} member={member} />
					))}
				</div>
			</TeamWrapper>
		</AboutWrapper>
	);
}

const AboutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.top-content {
		height: 80vh;
		display: flex;
	}

	.top-content-text {
		padding: 2rem;

		p {
			margin: 1rem 0;
		}
	}

	.bold {
		font-weight: bold;
	}

	background-color: white;
`;

const TeamWrapper = styled.div`
	position: absolute;
	bottom: 0;
	padding: 1rem;
	width: 100%;
	margin: 0 auto 3rem;
	display: flex;
	justify-content: center;

	background-color: #d73729;
	border-top: 3px solid #e98681;

	.team-content {
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		flex-wrap: wrap;
		width: 100rem;
	}

	.team-text {
		color: white;
		width: 100%;
		text-align: left;
		margin-bottom: 1rem;
	}
`;
