import React from 'react';
import { Route } from 'react-router-dom';
import GlobalStyle from './styled-components/GlobalStyle';

import { NavBar, Game, About } from './components';

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<NavBar />
			<Route exact path='/' component={Game} />
			<Route path='/about' component={About} />
		</div>
	);
}

export default App;
