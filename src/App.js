import React from 'react';
import './App.css';
import HomePage from './Pages/hompage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './Pages/shoppage/shop.component';
import Header from './Components/header/header.component';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
