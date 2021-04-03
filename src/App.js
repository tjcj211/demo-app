import React from 'react';
import Table from './table';
import NavBar from './components/navBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Products from './components/products';
import About from './components/about';
import NotFound from './components/notFound';

function App() {
	return (
		<div className="container">
			<NavBar />
			<Switch>
				<Route
					path="/products"
					render={(props) => (
						<Products sortBy="name" {...props} />
					)}
				></Route>
				<Route path="/about" component={About}></Route>
				<Route path="/not-found" component={NotFound}></Route>
				<Route path="/" exact component={Table}></Route>
				<Redirect to="/not-found" />
			</Switch>
		</div>
	);
}

export default App;
