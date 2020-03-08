import styled from 'styled-components';

export const StyledCell = styled.div`
	flex-shrink: 0;
	width: 6rem;
	height: 6rem;

	display: flex;
	flex-direction: column;
	justify-content: ${props =>
		props.room.isSpecialRoom || props.room.isCurrentRoom
			? 'flex-end'
			: 'center'};
	align-items: center;
	text-align: center;
	font-size: 1rem;

	cursor: ${props =>
		props.canInteract &&
		props.room.isRoom &&
		!props.room.isCurrentRoom &&
		'pointer'};

	/* color: white; */
	/* color: ${props => props.isNormal && '#0b6623'}; */
	/* color: ${props => props.isCave && 'white'}; */
	/* color: ${props => props.isCurrentRoom && 'black'}; */

	border: 1px solid lightskyblue;
	border: ${props => props.room.isNormal && '2px solid #0b6623'};
	border: ${props => props.room.isCave && '2px solid gray'};
	border: ${props => props.room.isTrap && '2px solid gray'};
	border: ${props => props.room.isMountain && '2px solid black'};

	border-left: ${props => props.room.exits.w && '0'};
	border-right: ${props => props.room.exits.e && '0'};
	border-top: ${props => props.room.exits.n && '0'};
	border-bottom: ${props => props.room.exits.s && '0'};

	background-color: lightcyan;
	background-color: ${props => props.room.isNormal && 'rgba(123, 179, 105, 1)'};
	background-color: ${props => props.room.isCave && 'rgba(32, 32, 32, 1)'};
	background-color: ${props => props.room.isTrap && 'rgba(32, 32, 32, 1)'};
	background-color: ${props => props.room.isMountain && 'rgb(101, 67, 33, 1)'};
	background-color: ${props =>
		props.room.isMiningRoom && 'rgba(250, 190, 88, 1)'};
	background-color: ${props => props.room.isDestination && 'pink'};
	background-color: ${props =>
		props.room.isCurrentRoom && 'rgba(123, 179, 105, 0.6)'};

	opacity: ${props => props.room.elevation === 5 && '1'};
	opacity: ${props => props.room.elevation === 4 && '0.9'};
	opacity: ${props => props.room.elevation === 3 && '0.8'};
	opacity: ${props => props.room.elevation === 2 && '0.7'};
	opacity: ${props => props.room.elevation === 1 && '0.6'};

	&:hover {
		background-color: ${props =>
			props.canInteract && props.room.isNormal && 'rgba(123, 179, 105, 0.75)'};
		background-color: ${props =>
			props.canInteract && props.room.isCave && 'rgba(32, 32, 32, 0.75)'};
		background-color: ${props =>
			props.canInteract && props.room.isTrap && 'rgba(32, 32, 32, 0.75)'};
		background-color: ${props =>
			props.canInteract &&
			props.room.isMiningRoom &&
			'rgba(250, 190, 88, 0.75)'};
		background-color: ${props =>
			props.canInteract &&
			props.room.isRoomToFind &&
			'rgba(30, 144, 255, 0.75)'};
		background-color: ${props =>
			props.canInteract && props.room.isDestination && 'purple'};
		background-color: ${props =>
			props.canInteract &&
			props.room.isCurrentRoom &&
			'rgba(123, 179, 105, 0.6)'};

		background-color: ${props =>
			props.canInteract &&
			props.room.elevation === 5 &&
			'rgb(101, 67, 33, 0.75)'};
		opacity: ${props => props.canInteract && props.room.elevation === 4 && '0.65'};
		opacity: ${props => props.canInteract && props.room.elevation === 3 && '0.55'};
		opacity: ${props => props.canInteract && props.room.elevation === 2 && '0.45'};
		opacity: ${props => props.canInteract && props.room.elevation === 1 && '0.35'};
	}
`;

export const StyledCellDark = styled(StyledCell)`
	/* color: white; */
	/* color: ${props => props.room.isSpecialRoom && 'black'}; */
	/* color: ${props => props.room.isCurrentRoom && 'black'}; */

	border: 1px solid #004080;
	border: ${props => props.room.isNormal && '2px solid darkgreen'};

	border-left: ${props => props.room.exits.w && '0'};
	border-right: ${props => props.room.exits.e && '0'};
	border-top: ${props => props.room.exits.n && '0'};
	border-bottom: ${props => props.room.exits.s && '0'};

	background-color: #000d1a;
	background-color: ${props => props.room.isNormal && '#013208'};
	background-color: ${props =>
		props.room.isSnitchRoom && 'rgba(250, 190, 88, 1)'};
	background-color: ${props => props.room.isDestination && 'pink'};
	background-color: ${props =>
		props.room.isCurrentRoom && 'rgba(123, 179, 105, 0.6)'};
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
