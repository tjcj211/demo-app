import React, { Component } from 'react';
import axios from 'axios';
import TableBody from './components/tableBody';
import TableHead from './components/tableHead';
const apiEndpoint = 'https://jsonplaceholder.typicode.com/users';
class Table extends Component {
	constructor(props) {
		super(props);

		this.handleSearch = this.handleSearch.bind(this);
	}
	state = {
		people: [], //getPeople(),
		query: '',
	};
	async componentDidMount() {
		const { data } = await axios.get(apiEndpoint);
		this.setState({ people: data });
	}
	handleSearch = (event) => {
		this.setState({ query: event.target.value });
	};
	handleLike = (person) => {
		const people = [...this.state.people];
		const index = people.indexOf(person);
		people[index].liked = !people[index].liked;
		this.setState({ people });
	};
	handleClick() {
		const toggle = !this.state.toggle;
		this.setState({ toggle }); //this.state.toggle =toggle is incorrect
	}
	handleDelete = async (person) => {
		const people = [...this.state.people];
		const newPeople = people.filter((p) => p.id !== person.id);
		this.setState({ people: newPeople });
		try {
			await axios.delete(apiEndpoint + '/' + person.id);
		} catch (error) {
			if (error.respond && error.respond.status == 404) {
				alert('This person has already been deleted');
				this.setState({ people });
			}
		}
	};
	handleAdd = async () => {
		const obj = { name: 'Bob', email: 'email@email.com' };
		const { data: person } = await axios.post(apiEndpoint, obj);
		const people = [person, ...this.state.people];
		this.setState({ people });
	};
	filterPeopleByName = () => {
		let people = [...this.state.people];
		if (this.state.query) {
			const filtered = people.filter((p) =>
				p.name
					.toLowerCase()
					.startsWith(this.state.query.toLowerCase())
			);
			people = filtered;
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
					placeholder="Search by Name"
					value={this.state.query}
					onChange={this.handleSearch}
				/>
				<button
					className="btn btn-primary"
					onClick={this.handleAdd}
				>
					Add
				</button>
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
