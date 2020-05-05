import React from 'react'
import { Carousel } from 'react-bootstrap'
import squareTopLakes from '../pictures/squareTopLakes.jpeg'
import sunset from '../pictures/sunset.jpeg'
import londonTower from '../pictures/londonTower.jpeg'
import crestedButte from '../pictures/crestedButte.jpeg'

const CustomCarousel = () => {
	return (
		<div className="carouselContainer">
			<Carousel>
				<Carousel.Item>
					<img className="d-block w-100" height="300" src={sunset} alt="sunset in san fransisco" />
					<Carousel.Caption>
						<h3>Sunset in San Fransisco</h3>
						<p className="carouselDescription">The only perk to weddings is traveling</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" height="300" src={squareTopLakes} alt="square top lakes hike" />
					<Carousel.Caption>
						<h3>Square Top Lakes</h3>
						<p className="carouselDescription">In the summer, I hike sometimes...</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" height="300" src={londonTower} alt="the london tower" />
					<Carousel.Caption>
						<h3>The London Tower</h3>
						<p className="carouselDescription">My Mom and step-father live in europe. When I visit, I always see amazing things!</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" height="300" src={crestedButte} alt="crested butte green lake" />
					<Carousel.Caption>
						<h3>Crested Butte</h3>
						<p className="carouselDescription">I love the mountains</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	)
}

export default CustomCarousel