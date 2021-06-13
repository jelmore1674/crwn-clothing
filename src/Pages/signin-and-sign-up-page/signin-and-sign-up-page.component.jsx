import React from 'react';
import './signin-and-sign-up-page.styles.scss';
import SignIn from '../../Components/signin/signin.component';
import SignUp from '../../Components/signup/signup.component';

const SignInAndSignUpPage = () => (
	<div className='signin-and-sign-up'>
		<SignIn />
		<SignUp />
	</div>
);

export default SignInAndSignUpPage;
