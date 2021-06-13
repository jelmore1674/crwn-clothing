import React from 'react';
import './signup.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

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

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		});
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='sign-in'>
				<h2>I don't have an account</h2>
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
			</div>
		);
	}
}

export default SignUp;
