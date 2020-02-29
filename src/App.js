import React from 'react';
import { Route } from 'react-router-dom';
import GlobalStyle from './styled-components/GlobalStyle';

import DataProvider from './contexts/DataContext';

import { NavBar, Game, About } from './components';

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<DataProvider>
				<NavBar />
				<Route exact path='/' component={Game} />
				<Route path='/about' component={About} />
			</DataProvider>
		</div>
	);
}

export default App;
