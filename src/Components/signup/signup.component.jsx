import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { SignupContainer, SignupTitle } from './signup.styles';

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, { displayName });
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (error) {
			console.error(error);
		}
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<SignupContainer>
				<SignupTitle>I don't have an account</SignupTitle>
				<span>Sign up with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='displayName'
						value={this.state.displayName}
						handleChange={this.handleChange}
						required
						label='Display Name'
					/>
					<FormInput
						type='email'
						name='email'
						value={this.state.email}
						handleChange={this.handleChange}
						required
						label='Email'
					/>
					<FormInput
						type='password'
						name='password'
						value={this.state.password}
						handleChange={this.handleChange}
						required
						label='Password'
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						value={this.state.confirmPassword}
						handleChange={this.handleChange}
						required
						label='Confirm Password'
					/>
					<CustomButton type='submit'>Sign Up</CustomButton>
				</form>
			</SignupContainer>
		);
	}
}

export default SignUp;
