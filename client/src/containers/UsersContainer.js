import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Users from '../components/Users/Users'
import CreateUser from '../components/Users/CreateUser'
import { connect } from 'react-redux'
import { getUsers, createUser, deleteUser } from '../actions/userActions'

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers()
	}

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


export default connect(mapStateToProps, { getUsers, createUser, deleteUser })(UsersContainer)