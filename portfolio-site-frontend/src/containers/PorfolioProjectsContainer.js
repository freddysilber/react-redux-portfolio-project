import React from 'react'
import { Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchRepositories } from '../actions/githubActions'
import { RepositoryList } from '../components'

class PortfolioProjectContainer extends React.Component {
	componentDidMount() {
		this.props.fetchRepositories()
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
			return <RepositoryList repositories={this.props.repositories} />
		}
	}
}

const mapStateToProps = state => {
	return {
		repositories: state.github.repositories,
		loading: state.github.loading
	}
}

export default connect(mapStateToProps, { fetchRepositories })(PortfolioProjectContainer)