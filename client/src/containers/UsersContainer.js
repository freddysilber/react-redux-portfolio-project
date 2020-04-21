import React from 'react'
import UserList from '../components/UserList'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import { connect } from 'react-redux'
import { getUsers } from '../actions/userActions'

class CreateUser extends React.Component {
	componentDidMount() {
		this.props.getUsers()
	}


	handleLoading = () => {
		if (this.props.loading) {
			return (
				<div className="spinnerContainer">
					<Spinner animation="border" variant="dark" />
				</div>
			)
		} else {
			return <UserList users={this.props.users} />
		}
	}

	render() {
		return (
			<>
				{this.handleLoading()}
			</>
		)
	}

	// handleChange = event => {
	// 	this.setState({
	// 		[event.target.name]: event.target.value
	// 	})
	// }

	// handleSubmit = event => {
	// 	event.preventDefault()
	// 	console.log(this.state)
	// 	fetch('api/users', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify({
	// 			'username': this.state.username,
	// 			'password': this.state.password
	// 		})
	// 	})
	// 		.then(response => response.json())
	// 		.then(console.log('success'))
	// 		.catch(error => console.error(error))

	// 	this.setState({
	// 		username: '',
	// 		password: ''
	// 	})
	// }

	// render() {
	// 	return (
	// 		<div class="createUserForm">
	// 			<h5>Sign Up</h5>
	// 			<Form onSubmit={this.handleSubmit}>
	// 				<Form.Group controlId="username">
	// 					<Form.Label>Username</Form.Label>
	// 					<Form.Control type="text" placeholder="username" name="username" onChange={this.handleChange} />
	// 				</Form.Group>
	// 				<Form.Group controlId="password">
	// 					<Form.Label>Password</Form.Label>
	// 					<Form.Control type="password" placeholder="password" name="password" onChange={this.handleChange} />
	// 				</Form.Group>
	// 				<Button type="submit">Submit</Button>
	// 			</Form>
	// 		</div>
	// 	)
	// }
}

const mapStateToProps = state => {
	return {
		users: state.users.users
	}
}

export default connect(mapStateToProps, { getUsers })(CreateUser)