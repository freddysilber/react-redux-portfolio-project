import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import profilePic from '../pictures/profileMonopoly.jpeg'
import squareTopLakes from '../pictures/squareTopLakes.jpeg'
import sunset from '../pictures/sunset.jpeg'
import londonTower from '../pictures/londonTower.jpeg'

export default class CarouselContainer extends React.Component {
	render() {
		return (
			<div style={{ background: 'lightgray' }}>
				<Carousel>
					<Carousel.Item>
						<div style={{ width: '100%', height: '30rem' }}>
							<img className="d-block w-100" width="100" src={squareTopLakes} />
						</div>

						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<div style={{ width: '100%', height: '30rem' }}>
							<img className="d-block w-100" width="100" src={sunset} />
						</div>
						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<div style={{ width: '100%', height: '30rem' }}>
							<img className="d-block w-100" width="100" src={londonTower} />
						</div>
						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		)
	}
}