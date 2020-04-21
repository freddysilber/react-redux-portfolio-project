import React from 'react'
// import Counter from '../components/Counter'
import Card from 'react-bootstrap/Card'

const ResumeContainer = () => {
	return (
		<div className="resumeContentContainer">
			<Card className="cardItem">
				<Card.Body>
					<Card.Title>Fraser Valley Hot Dog</Card.Title>
					<Card.Text>This was my first job in high school. I worked as a line cook at a small hotdog and burger shop.</Card.Text>
				</Card.Body>
			</Card>
			<Card className="cardItem">
				<Card.Body>
					<Card.Title>The Foundry</Card.Title>
					<Card.Text>Worked here on and off through high school doing almost everything from back of the house to front of the house. </Card.Text>
				</Card.Body>
			</Card>
			<Card className="cardItem">
				<Card.Body>
					<Card.Title>Pole Creek (Bistro 28)</Card.Title>
					<Card.Text>My first full time job as a chef at a golf course.</Card.Text>
				</Card.Body>
			</Card>
			<Card className="cardItem">
				<Card.Body>
					<Card.Title>Snow Mountain Builders</Card.Title>
					<Card.Text>Worked for my dad for a summer doing construction.</Card.Text>
				</Card.Body>
			</Card>
			<Card className="cardItem">
				<Card.Body>
					<Card.Title>Solstice Winter Bistro</Card.Title>
					<Card.Text>My Second full time job as a chef creating fancy small plates at a local cocktail lounge.</Card.Text>
				</Card.Body>
			</Card>
			<Card className="cardItem">
				<Card.Body>
					<Card.Title>Cloud Coach</Card.Title>
					<Card.Text>Working currently as a developer doing project management software on Salesforce. #SAS.</Card.Text>
				</Card.Body>
			</Card>
			{/* <div className="text-center">
				<Counter />
			</div> */}
		</div>
	)
}

export default ResumeContainer