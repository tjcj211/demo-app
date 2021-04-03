import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand">Navbar Branding</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link to="/" className="nav-link">
								Home
							</Link>
						</li>
						<li className="nav-item ">
							<Link to="/products" className="nav-link">
								Products
							</Link>
						</li>
						<li className="nav-item ">
							<Link to="/about" className="nav-link">
								About
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default NavBar;
