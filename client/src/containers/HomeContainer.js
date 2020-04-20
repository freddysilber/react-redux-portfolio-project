import React from 'react'
// import Counter from '../components/counter/Counter'
import CarouselContainer from '../containers/CarouselContainer'
import Bio from '../components/bio/Bio'

export default class HomeContainer extends React.Component {
	render() {
		return (
			<div>
				<Bio />
				{/* <Counter /> */}
				<CarouselContainer />
			</div>
		)
	}
}