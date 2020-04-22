import React from 'react'
import UserList from '../components/UserList'
import CreateUser from '../components/CreateUser'
import { connect } from 'react-redux'
import { getUsers, createUser } from '../actions/userActions'
import Spinner from 'react-bootstrap/Spinner'

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers()
	}

	render() {
		return (
			<>
				{this.handleLoading()}
			</>
		)
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
					<CreateUser />
					<UserList users={this.props.users} />
				</>
			)
		}
	}
}

const mapStateToProps = state => {
	return { users: state.users.users }
}

export default connect(mapStateToProps, { getUsers, createUser })(UsersContainer)