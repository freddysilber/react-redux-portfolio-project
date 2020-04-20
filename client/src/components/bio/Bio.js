import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import profilePic from './profileMonopoly.jpeg'
import './Bio.css'

const Bio = () => {
	return (
		<Jumbotron style={{ background: '#323C39', margin: '1rem' }}>
			<center>
				<img src={profilePic} height="500" />
			</center>
			<div className="bio">
				<p className="bioText">
					Hello! Welcome to my portfolio site! My Name is Freddy Silber and I am a full stack web developer.
					I was born in a small mountain town called Fraser in the state of Colorado. I'm a snowboarder but that doesn't pay the bills so now I'm a developer.
			</p>
			</div>
		</Jumbotron>
	)
}

export default Bio