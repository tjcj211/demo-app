import React, { Component } from 'react';
class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submitted');
	};
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label for="email">Email Address</label>
						<input
							type="email"
							className="form-control"
							id="email"
							aria-describedby="emailHelp"
						/>
						<div className="form-group">
							<label for="password">Password</label>
							<input
								type="password"
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
