import React, { Component } from 'react';
import Joi, { join } from 'joi-browser';
class LoginForm extends Component {
	state = {
		account: {
			email: '',
			password: '',
		},
		errors: {},
	};

	schema = {
		email: Joi.string().required().label('Email Address'),
		password: Joi.string().required().label('Password'),
	};

	validate = () => {
		const { error } = Joi.validate(this.state.account, this.schema, {
			abortEarly: false,
		});
		if (!error) return null;
		const errors = {};
		for (let item of error.details) errors[item.path[0]] = item.message;
		return errors;
	};

	validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const schema = { [name]: this.schema[name] };
		const { error } = Joi.validate(obj, schema);
		if (!error) return null;
		return error.details[0].message;
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
						<button
							disabled={this.validate()}
							type="submit"
							className="btn btn-primary"
						>
							Login
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default LoginForm;
