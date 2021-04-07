import React, { Component } from 'react';
import axios from 'axios';
const apiEndpoint = 'https://jsonplaceholder.typicode.com/users';
class PersonDetails extends Component {
	state = {
		person: {},
	};

	async componentDidMount() {
		const { data: person } = await axios.get(
			apiEndpoint + '/' + this.props.match.params.id
		);
		if (!person) return this.props.history.replace('/not-found');
		this.setState({ person });
	}

	render() {
		const { person } = this.state;
		return (
			<div>
				<h3>Person Details</h3>
				<div>Id: {person.id} </div>
				<div>Name: {person.name} </div>
				<div>Phone: {person.phone}</div>
			</div>
		);
	}
}

export default PersonDetails;
