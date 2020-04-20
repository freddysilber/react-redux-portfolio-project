import React from './node_modules/react'
import Jumbotron from './node_modules/react-bootstrap/Jumbotron'
// import profilePic from './profileMonopoly.jpeg'

const Bio = () => {
	return (
		<Jumbotron style={{ background: '#00D2A3', margin: '1rem' }}>
			<h1>Bio</h1>
			{/* <img src={profilePic} /> */}
			<p>
				Hello! Welcome to my portfolio site! My Name is Freddy Silber and I am a full stack web developer.
				I was born in a small mountain town called Fraser in the state of Colorado. I'm a snowboarder but that doesn't pay the bills so now I'm a developer.
			</p>
		</Jumbotron>
	)
}

export default Bio