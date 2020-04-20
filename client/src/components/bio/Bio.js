import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import profilePic from './profileMonopoly.jpeg'
import './Bio.css'

const Bio = () => {
	return (
		<Jumbotron fluid style={{ background: '#323C39', margin: '1rem', padding: '2rem' }}>
			<div className="content">
				<Col xs={6} md={4}>
					<Image src={profilePic} roundedCircle height="400" />
				</Col>
				<div className="bio">
					<p className="bioText">
						Hello! Welcome to my portfolio site! My Name is Freddy Silber and I am a full stack web developer.
						I was born in a small mountain town called Fraser in the state of Colorado. I'm a snowboarder but that doesn't pay the bills so now I'm a developer.
					</p>
				</div>
			</div>
		</Jumbotron>
	)
}

export default Bio