import styled from 'styled-components';

export const ComponentWrapper = styled.div`
	// width: 20%;
	min-width: 30rem;
	padding: 1rem;
	margin-bottom: 2rem;

	max-height: 24rem;
	flex-shrink: 0;
	flex-grow: 0;
	overflow-y: auto;

	background-color: white;
`;

export const FooterComponentWrapper = styled(ComponentWrapper)`
	width: 18%;
	min-width: 24rem;
	margin-bottom: 0;
`;

export const StatusHeader = styled.h3`
	cursor: ${props => !props.autoTravelMode && 'pointer'};

	&:hover {
		color: ${props => !props.autoTravelMode && '#eb847d'};
	}
`;
