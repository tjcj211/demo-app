import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<NavLink className="navbar-brand" to="/">
					Home
				</NavLink>
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
						<li className="nav-item ">
							<Link to="/login" className="nav-link">
								Login
							</Link>
						</li>
						<li className="nav-item ">
							<Link to="/products" className="nav-link">
								Products
							</Link>
						</li>
						<li className="nav-item ">
							<NavLink to="/about" className="nav-link">
								About
							</NavLink>
						</li>
						<li className="nav-item ">
							<NavLink to="/register" className="nav-link">
								Register
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default NavBar;
