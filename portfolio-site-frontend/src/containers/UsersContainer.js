
import React from 'react'
import { Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getUsers, createUser, deleteUser } from '../actions/userActions'
import { Users, CreateUser } from '../components'

class UsersContainer extends React.Component {
	// Fetch all users when container mounts
	componentDidMount() {
		this.props.getUsers()
	}
	// render users or spinner if loading
	render() {
		return this.handleLoading()
	}

	handleLoading = () => {
		if (this.props.loading) {
			return (
				<div className="spinnerContainer">
					<Spinner animation="border" variant="dark" />
				</div >
			)
		} else {
			return (
				<>
					<h1>Create Users</h1>
					<CreateUser createUser={this.props.createUser} />
					<Users users={this.props.users} deleteUser={this.props.deleteUser} />
				</>
			)
		}
	}
}

const mapStateToProps = state => {
	return {
		users: state.users.users,
		loading: state.users.loading
	}
}


export default connect(mapStateToProps, {
	getUsers,
	createUser,
	deleteUser
})(UsersContainer)