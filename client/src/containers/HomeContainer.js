import React from 'react'
import Counter from '../components/Counter'
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