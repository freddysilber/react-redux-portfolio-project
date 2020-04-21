import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { contactInfo } from '../data/util'

export default class InfoContainer extends React.Component {
	render() {
		return (
			<div>
				<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
					<Tab eventKey="home" title="Send me a message">
						<p>send me a message!</p>
					</Tab>
					<Tab eventKey="profile" title="Contact Info">
						<div>
							<p>Personal Email: {contactInfo.personalEmail}</p>
							<p>Work Email: {contactInfo.workEmail}</p>
							<p>Phone: {contactInfo.phone}</p>
						</div>
					</Tab>
					<Tab eventKey="contact" title="Contact" disabled>
					</Tab>
				</Tabs>
			</div>
		)
	}
}