import React from 'react'
import Counter from '../components/counter/Counter'
import Bio from '../components/bio/Bio'

export default class HomeContainer extends React.Component {
	render() {
		return (
			<div>
				<h1>Welcome!</h1>
				<Bio />
				<Counter />
			</div>
		)
	}
}