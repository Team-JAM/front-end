import styled from 'styled-components';

export const ComponentWrapper = styled.div`
	// width: 20%;
	min-width: 30rem;
	padding: 1rem;
	margin-bottom: 2rem;

	max-height: 24rem;
	overflow-y: auto;

	background-color: white;
`;

export const FooterComponentWrapper = styled(ComponentWrapper)`
	width: 19%;
	min-width: 24rem;
`;
