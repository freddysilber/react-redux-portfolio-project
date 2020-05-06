import React from 'react'
import SocialMediaIcons from './SocialMediaIcons'
import { Jumbotron, Image } from 'react-bootstrap'
import cloudcoach from '../pictures/cloudcoach.jpg'

const Bio = () => {
	const cloudcoachurl = () => <a href="https://cloudcoach.com/" target="_blank" rel="noopener noreferrer" className="cloudCoachAnchor">Cloud Coach</a>
	const fraserUrl = () => <a href='https://frasercolorado.com/' target='_blank' rel='noopener noreferrer' className='cloudCoachAnchor'>Fraser</a>
	const winterParkResortUrl = () => <a href='https://www.winterparkresort.com/' target='_blank' rel='noopener noreferrer' className='cloudCoachAnchor'>Winter Park Resort</a>
	const middleParkHighSchool = () => <a href='http://mphs.egsd.org/' target='_blank' rel='noopener noreferrer' className='cloudCoachAnchor'>Middle Park High School</a>
	const salesforceUrl = () => <a href='https://www.salesforce.com/' target='_blank' rel='noopener noreferrer' className='cloudCoachAnchor'>Salesforce</a>

	return (
		<Jumbotron fluid className="jumboTron">
			<div className="content">
				<Image src={cloudcoach} rounded height="400" />
				<SocialMediaIcons />
				<div className="bio">
					<h4>Hello and welcome to my portfolio site!</h4>
					<p>
						My Name is Freddy Silber and I am a software engineer and full stack web developer.
						I was born in 1999 and grew up in a small mountain town called {fraserUrl()} in the state of Colorado.
						I'm a snowboarder but that doesn't pay the bills so now I'm a developer.
					</p>
					<p>
						I started snowboarding when I was 4 years old and would average almost 100 days a season snowboarding at my local ski area, {winterParkResortUrl()}.
						I graduated {middleParkHighSchool()} in Granby Colorado with the class of 2017. During school, I would often find myself nerding out in our computer lab
						with some of my friends. We would do all kinds of things from creating claymation films, 3D printing, programming 3D printers, video games, and our attemps to hack other computer programs.
					</p>
					<p>
						Shortly after I graduated high school, I landed a job with a company called {cloudcoachurl()} and started learning basic programming skills on the {salesforceUrl()}.com CRM platform.
						Now I am a developer for {cloudcoachurl()} and spend my time assisting our clients with custom UI's, automation, database triggers, and implementations as well as manage a few component libraries,
						optimize code, maintain consistant data, and invent my own workflows, apps etc.
					</p>
					<p>
						Asside from programming all the time, I like to play electric guitar, cook, play with my cat, skateboard, snowboard, bmx bike, mountain bike, fish, hike, camp and much much more... oh, and keep learning!
					</p>
				</div>
			</div>
		</Jumbotron>
	)
}

export default Bio