import React, { Component } from 'react';
class LoginForm extends Component {
	state = {
		account: {
			email: '',
			password: '',
		},
	};
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.email + ' ' + this.state.password);
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
							id="email"
							aria-describedby="emailHelp"
						/>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								name="password"
								value={this.state.account.password}
								className="form-control"
								id="password"
							/>
						</div>
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
