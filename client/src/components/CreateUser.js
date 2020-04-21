import React from 'react'

export default class CreateUser extends React.Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: ''
		}
	}

	componentDidMount() {
		console.log('component did mount')
		fetch('localhost:3001/users')
			.then(response => console.log(response.json()))
			.catch(error => console.error(error))
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		console.log(this.state)
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="username" placeholder="Enter usernme" onChange={this.handleChange} />
					<input type="password" name="password" placeholder="Create password" onChange={this.handleChange} />
					<input type="submit" />
				</form>
			</div>
		)
	}
}