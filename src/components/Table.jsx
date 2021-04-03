import React, { Component } from 'react';
import TableBody from '../components/TableBody';
import TableHead from './TableHead';
import { getPeople } from '../service/PeopleService';
import ToggleButton from './ToggleButton';

class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			people: getPeople(),
			query: '',
		};
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch = (event) => {
		this.setState({ query: event.target.value });
	};

	handleClick() {
		const toggle = !this.state.toggle;
		this.setState({ toggle }); //this.state.toggle = toggle is incorrect
	}

	handleDelete = (person) => {
		const people = [...this.state.people];
		const newPeople = people.filter((p) => p.id !== person.id);
		this.setState({ people: newPeople });
	};

	handleLike = (person) => {
		const people = [...this.state.people];
		const index = people.indexOf(person);
		people[index].liked = !people[index].liked;
		this.setState({ people });
	};

	filterPeopleByName = () => {
		let people = [...this.state.people];
		if (this.state.query) {
			const filteredPeople = people.filter((p) =>
				p.name
					.toLowerCase()
					.startsWith(this.state.query.toLowerCase())
			);
			people = filteredPeople;
		}
		return people;
	};

	render() {
		const people = this.filterPeopleByName();
		return (
			<React.Fragment>
				<input
					type="text"
					className="form-control"
					name="search"
					placeholder="Search by name"
					value={this.state.query}
					onChange={this.handleSearch}
				/>
				<table className="table">
					<TableHead />
					<TableBody
						people={people}
						onDelete={this.handleDelete}
						onLike={this.handleLike}
					/>
				</table>
			</React.Fragment>
		);
	}
}

export default Table;
