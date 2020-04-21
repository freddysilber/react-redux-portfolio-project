import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import squareTopLakes from '../pictures/squareTopLakes.jpeg'
import sunset from '../pictures/sunset.jpeg'
import londonTower from '../pictures/londonTower.jpeg'
import crestedButte from '../pictures/crestedButte.jpeg'

export default class CustomCarousel extends React.Component {
	render() {
		return (
			<div style={{ background: 'lightgray' }}>
				<Carousel>
					<Carousel.Item>
						<img className="d-block w-100" height="300" src={sunset} />
						<Carousel.Caption>
							<h3>Sunset in Seattle</h3>
							<p>The only perk to weddings is traveling</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" height="300" src={squareTopLakes} />
						<Carousel.Caption>
							<h3>Square Top Lakes</h3>
							<p>In the summer, I hike sometimes...</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" height="300" src={londonTower} />
						<Carousel.Caption>
							<h3>The London Tower</h3>
							<p>My Mom and step-father live in europe. When I visit, I always see amazing things!</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" height="300" src={crestedButte} />
						<Carousel.Caption>
							<h3>Crested Butte</h3>
							<p>I love the mountains</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		)
	}
}