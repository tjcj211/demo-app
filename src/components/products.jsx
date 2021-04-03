import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class Products extends Component {
	state = {
		products: [
			{ id: 2, name: 'Product 2' },
			{ id: 3, name: 'Product 3' },
			{ id: 1, name: 'Product 1' },
		],
	};

	sortProducts = () => {
		let sortedProducts = this.state.products;
		if (this.props.sortBy === 'name')
			sortedProducts = _.orderBy(sortedProducts, ['name'], 'asc');
		return sortedProducts;
	};

	render() {
		let sortedProducts = this.sortProducts();
		return (
			<div>
				<h1>Products</h1>
				<ul>
					{sortedProducts.map((product) => (
						<li key={product.id}>
							<Link to={`/products/${product.id}`}>
								{product.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Products;
