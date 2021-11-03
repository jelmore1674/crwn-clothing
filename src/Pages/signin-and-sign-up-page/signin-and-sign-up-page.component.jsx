import React from 'react';
import SignIn from '../../Components/signin/signin.component';
import SignUp from '../../Components/signup/signup.component';
import { SignInAndSignUpContainer } from './signin-and-sign-up-page.styles';

const SignInAndSignUpPage = () => (
	<SignInAndSignUpContainer>
		<SignIn />
		<SignUp />
	</SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
