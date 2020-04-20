import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import RepositoryList from '../components/RepositoryList'
import { connect } from 'react-redux'
import { fetchRepositories } from '../actions/githubActions'

class PortfolioProjectContainer extends React.Component {
	componentDidMount() {
		this.props.fetchRepositories()
	}

	render() {
		return (
			<center>
				{this.handleLoading()}
			</center>
		)
	}

	handleLoading = () => {
		if (this.props.loading) {
			return <Spinner animation="border" variant="dark" />
		} else {
			return <RepositoryList repositories={this.props.repositories} />
		}
	}
}

const mapDispatchToProps = state => {
	return {
		repositories: state.github.repositories,
		loading: state.github.loading
	}
}

export default connect(mapDispatchToProps, { fetchRepositories })(PortfolioProjectContainer)