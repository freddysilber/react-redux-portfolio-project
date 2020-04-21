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
			<>
				{this.handleLoading()}
			</>
		)
	}

	handleLoading = () => {
		if (this.props.loading) {
			return (
				<div style={{ top: '50%', left: '50%', position: 'fixed' }}>
					<Spinner animation="border" variant="dark" />
				</div >
			)
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