import React from 'react'
import SocialMediaIcons from './SocialMediaIcons'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import cloudcoach from '../pictures/cloudcoach.jpg'

const Bio = () => {
	const cloudcoachurl = () => <a href="https://cloudcoach.com/" target="_blank" className="cloudCoachAnchor">Cloud Coach</a>

	return (
		<Jumbotron fluid className="jumboTron">
			<div className="content">
				<Image src={cloudcoach} rounded height="400" />
				<SocialMediaIcons />
				<div className="bio">
					<h4>Hello and welcome to my portfolio site!</h4>
					<p>
						My Name is Freddy Silber and I am a full stack web developer.
						I was born in 1999 and grew up in a small mountain town called Fraser in the state of Colorado.
						I'm a snowboarder but that doesn't pay the bills so now I'm a developer.
					</p>
					<p>
						I started snowboarding when I was 4 years old and would average almost 100 days a season snowboarding at my local ski resort, Winter Park.
						I graduated Middle Park Hight School in Granby Colorado with the class of 2017. During school, I would often find myself nerding out in our computer lab
						with some of my friends. We would do all kinds of things from creating claymation films, 3D printing, programming 3D printers, video games, and our attemps to hack other computer programs.
					</p>
					<p>
						Shortly after I graduated high school, I landed a job with a company called {cloudcoachurl()} and started learning basic programming skills on the Salesforce.com CRM platform.
						Now I am a developer for {cloudcoachurl()}  and spend my time assisting our clients with custom UI's, automation, and implementations as well as manage a few component libraries,
						optimize code, maintain consistant data, and invent my own workflows, apps, and UI's.
					</p>
				</div>
			</div>
		</Jumbotron>
	)
}

export default Bio