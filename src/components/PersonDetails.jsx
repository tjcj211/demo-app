import React, { Component } from 'react';
import { getPerson, savePerson } from '../service/peopleService';
class PersonDetails extends Component {
	state = {
		person: {},
	};

	async componentDidMount() {
		const { data: person } = await getPerson(this.props.match.params.id);
		if (!person) return this.props.history.replace('/not-found');
		this.setState({ person });
	}

	handleUpdate = async (curPerson) => {
		curPerson.name = 'Updated';
		const { data: person } = await savePerson(curPerson);
		this.setState({ person });
	};

	render() {
		const { person } = this.state;
		return (
			<div>
				<button
					className="btn btn-primary"
					onClick={() => {
						this.handleUpdate(person);
					}}
				>
					Update
				</button>
				<h3>Person Details</h3>
				<div>Id: {person.id} </div>
				<div>Name: {person.name} </div>
				<div>Phone: {person.phone}</div>
			</div>
		);
	}
}

export default PersonDetails;
