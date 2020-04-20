import React from 'react'
import { connect } from 'react-redux'

class Counter extends React.Component {
	handleIncrement = event => {
		console.log('clicked', this.props.count.count.length)
		this.props.increment()
	}

	handleDecrement = event => {
		this.props.decrement()
	}

	render() {
		return (
			<div>
				<p>Counter</p>
				<button onClick={this.handleIncrement}>Click me +</button>
				<button onClick={this.handleDecrement}>Click me -</button>
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
		decrement: () => dispatch({ type: 'DECREMENT_COUNT' })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)