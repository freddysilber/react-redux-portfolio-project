import React from 'react'
import UserList from '../components/UserList'
import CreateUser from '../components/CreateUser'
import { connect } from 'react-redux'
import { getUsers } from '../actions/userActions'

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers()
	}

	render() {
		return (
			<>
				<CreateUser />
				<UserList users={this.props.users} />
			</>
		)
	}
}

const mapStateToProps = state => {
	return {
		users: state.users.users
	}
}

export default connect(mapStateToProps, { getUsers })(UsersContainer)