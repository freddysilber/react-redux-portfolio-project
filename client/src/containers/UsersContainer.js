import React from 'react'
import Users from '../components/Users/Users'
import CreateUser from '../components/Users/CreateUser'
import { connect } from 'react-redux'
import { getUsers, createUser, deleteUser } from '../actions/userActions'

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers()
	}

	render() {
		return (
			<>
				<CreateUser createUser={this.props.createUser} />
				<Users users={this.props.users} deleteUser={this.props.deleteUser} />
			</>
		)
	}
}

const mapStateToProps = state => ({ users: state.users.users })

export default connect(mapStateToProps, { getUsers, createUser, deleteUser })(UsersContainer)