import React from 'react';
import './App.css';
import HomePage from './Pages/hompage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './Pages/shoppage/shop.component';
import Header from './Components/header/header.component';
import SignInAndSignUpPage from './Pages/signin-and-sign-up-page/signin-and-sign-up-page.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						},
					});
					console.log(this.state);
				});
			}
			this.setState({ currentUser: userAuth });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage} />{' '}
					<Route path='/shop' component={ShopPage} />{' '}
					<Route path='/signin' component={SignInAndSignUpPage} />{' '}
				</Switch>{' '}
			</div>
		);
	}
}

export default App;
