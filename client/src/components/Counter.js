import React from 'react'
import { connect } from 'react-redux'

class Counter extends React.Component {
	handleIncrement = event => {
		this.props.increment()
	}

	render() {
		return (
			<div style={{ margin: '4rem', border: '1px solid orchid' }}>
				<p>Counter</p>
				<button onClick={this.handleIncrement}>Click me +</button>
				<p>{this.props.count.count.length}</p>
			</div>
		)
	}

}

const mapStateToProps = state => {
	return {
		count: state.count
	}
}

const mapDispatchToProps = dispatch => {
	return {
		increment: () => dispatch({ type: 'INCREMENT_COUNT' }),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)