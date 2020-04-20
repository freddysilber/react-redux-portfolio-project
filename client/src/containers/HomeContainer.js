import React from 'react'
import Counter from '../components/counter/Counter'
import Bio from '../components/Bio'

export default class HomeContainer extends React.Component {
	render() {
		return (
			<div>
				<Bio />
				<Counter />
			</div>
		)
	}
}