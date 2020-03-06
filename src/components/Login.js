import React, { useState } from 'react';
import styled from 'styled-components';
import { useDataContext } from '../contexts/DataContext';

const Login = () => {
	const { dispatch } = useDataContext();

	const [input, setInput] = useState('');

	const handleInput = e => {
		setInput(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log(input);

		const JAMcode = process.env.REACT_APP_JAM_CODE;
		console.log(JAMcode);
		if (input === JAMcode) {
			localStorage.setItem('isJAM', true);
			dispatch({ type: 'SET_IS_JAM' });
		}
		setInput('');
	};

	return (
		<Wrapper>
			<form onSubmit={e => handleSubmit(e)}>
				<input
					type='password'
					name='input'
					value={input}
					onChange={e => handleInput(e)}
				/>
				<button type='submit'>Go</button>
			</form>
		</Wrapper>
	);
};

export default Login;

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
