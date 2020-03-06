import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import GlobalStyle from './styled-components/GlobalStyle';

// import DataProvider from './contexts/DataContext';

import { useDataContext } from './contexts/DataContext';

import { NavBar, Game, About, Login } from './components';

function App() {
	const {
		data: { isJAM },
	} = useDataContext();

	return (
		<div className='App'>
			<GlobalStyle />
			{/* <DataProvider> */}
			{isJAM ? (
				<>
					<NavBar />
					<Route exact path='/' component={Game} />
					<Route path='/about' component={About} />
				</>
			) : (
				<Login />
			)}
			{/* </DataProvider> */}
		</div>
	);
}

export default App;
