import React, { Component } from 'react';
class LoginForm extends Component {
	state = {
		account: {
			email: '',
			password: '',
		},
		errors: {},
	};

	validate = () => {
		const errors = {};
		const { account } = this.state;
		if (account.email.trim() === '') errors.email = 'Email is required';
		if (account.password.trim() === '')
			errors.password = 'Password is required';
		return Object.keys(errors).length === 0 ? null : errors;
	};

	validateProperty = ({ name, value }) => {
		if (name === 'email') {
			if (value.trim() === '') return 'Username is required';
		}
		if (name === 'password') {
			if (value.trim() === '') return 'Password is required';
		}
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const errors = this.validate();
		console.log(errors);
		this.setState({ errors: errors || {} });
		//console.log(this.state.email + ' ' + this.state.password);
	};

	handleChange = ({ currentTarget: input }) => {
		const errors = { ...this.state.errors };
		const errorMessage = this.validateProperty(input);
		console.log(errorMessage);
		if (errorMessage) errors[input.name] = errorMessage;
		const account = { ...this.state.account };
		account[input.name] = input.value;
		this.setState({ account, errors });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="email">Email Address</label>
						<input
							type="email"
							name="email"
							className="form-control"
							value={this.state.account.email}
							onChange={this.handleChange}
							id="email"
							aria-describedby="emailHelp"
						/>
						{this.state.errors.email && (
							<div className="alert alert-danger">
								{this.state.errors.email}
							</div>
						)}
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								name="password"
								value={this.state.account.password}
								onChange={this.handleChange}
								className="form-control"
								id="password"
							/>
						</div>
						{this.state.errors.password && (
							<div className="alert alert-danger">
								{this.state.errors.password}
							</div>
						)}
						<button type="submit" className="btn btn-primary">
							Login
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default LoginForm;
