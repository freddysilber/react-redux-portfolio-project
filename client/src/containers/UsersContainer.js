import React from 'react'
import Users from '../components/Users'
import CreateUser from '../components/CreateUser'
import { connect } from 'react-redux'
import { getUsers, createUser, deleteUser } from '../actions/userActions'
import Spinner from 'react-bootstrap/Spinner'

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
				</div>
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

const mapStateToProps = state => ({ users: state.users.users })

export default connect(mapStateToProps, { getUsers, createUser, deleteUser })(UsersContainer)