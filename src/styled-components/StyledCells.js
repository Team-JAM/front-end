import styled from 'styled-components';

export const StyledCell = styled.div`
	flex-shrink: 0;
	width: 6rem;
	height: 6rem;

	display: flex;
	flex-direction: column;
	justify-content: ${props =>
		props.isSpecialRoom || props.isTrap || props.isCurrentRoom
			? 'flex-end'
			: 'center'};
	align-items: center;
	text-align: center;
	font-size: 1rem;

	cursor: ${props => props.cooldownOver && props.isRoom && 'pointer'};

	color: white;
	color: ${props => props.terrain === 'NORMAL' && '#0b6623'};
	color: ${props => props.terrain === 'CAVE' && 'white'};
	color: ${props => props.isCurrentRoom && 'black'};

	border: 1px solid lightskyblue;
	border: ${props => props.terrain === 'NORMAL' && '2px solid #0b6623'};
	border: ${props => props.terrain === 'CAVE' && '2px solid gray'};
	border: ${props => props.terrain === 'TRAP' && '2px solid gray'};
	border: ${props => props.terrain === 'MOUNTAIN' && '2px solid black'};

	border-left: ${props => props.exitW && '0'};
	border-right: ${props => props.exitE && '0'};
	border-top: ${props => props.exitS && '0'};
	border-bottom: ${props => props.exitN && '0'};

	// border: ${props => props.isCurrentRoom && '3px solid red'};

	background-color: lightcyan;
	background-color: ${props => props.terrain === 'NORMAL' && '#7bb369'};
	background-color: ${props => props.terrain === 'CAVE' && '#202020'};
	background-color: ${props => props.terrain === 'TRAP' && '#202020'};
	background-color: ${props =>
		props.terrain === 'MOUNTAIN' && 'rgb(101, 67, 33)'};
	// background-color: ${props => props.isSpecialRoom && 'yellow'};
	background-color: ${props => props.isMiningRoom && 'orange'};
	background-color: ${props => props.isRoomToFind && 'dodgerblue'};
	background-color: ${props => props.isDestination && 'purple'};
	background-color: ${props => props.isCurrentRoom && 'white'};

	opacity: ${props => props.elevation === 5 && '1'};
	opacity: ${props => props.elevation === 4 && '0.9'};
	opacity: ${props => props.elevation === 3 && '0.8'};
	opacity: ${props => props.elevation === 2 && '0.7'};
	opacity: ${props => props.elevation === 1 && '0.6'};

	&:hover {
		opacity: ${props => props.cooldownOver && props.isRoom && '0.75'};
	}
`;

export const StyledCellDark = styled(StyledCell)`
	color: white;
	color: ${props => props.isSpecialRoom && 'black'};
	color: ${props => props.isCurrentRoom && 'black'};

	border: 1px solid #004080;
	border: ${props => props.terrain === 'NORMAL' && '2px solid darkgreen'};
	border: ${props => props.terrain === 'CAVE' && '2px solid gray'};
	border: ${props => props.terrain === 'TRAP' && '2px solid black'};
	border: ${props => props.terrain === 'MOUNTAIN' && '2px solid black'};

	border-left: ${props => props.exitW && '0'};
	border-right: ${props => props.exitE && '0'};
	border-top: ${props => props.exitS && '0'};
	border-bottom: ${props => props.exitN && '0'};

	// border: ${props => props.isCurrentRoom && '3px solid red'};

	background-color: #000d1a;
	background-color: ${props => props.terrain === 'NORMAL' && '#013208'};
	background-color: ${props => props.terrain === 'CAVE' && '#202020'};
	background-color: ${props => props.terrain === 'TRAP' && 'red'};
	background-color: ${props =>
		props.terrain === 'MOUNTAIN' && 'rgb(101, 67, 33)'};
	// background-color: ${props => props.isSpecialRoom && 'yellow'};
	background-color: ${props => props.isRoomToFind && 'dodgerblue'};
	// background-color: ${props => props.isOnPath && 'pink'};
	background-color: ${props => props.isDestination && 'purple'};
	background-color: ${props => props.isCurrentRoom && 'white'};

	opacity: ${props => props.elevation === 5 && '1'};
	opacity: ${props => props.elevation === 4 && '0.9'};
	opacity: ${props => props.elevation === 3 && '0.8'};
	opacity: ${props => props.elevation === 2 && '0.7'};
	opacity: ${props => props.elevation === 1 && '0.6'};
`;

export const Dot = styled.div`
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 50%;
	background-color: rgba(0, 0, 0, 0.4);
`;

export const LightDot = styled(Dot)`
	background-color: rgba(255, 255, 255, 0.8);
`;
