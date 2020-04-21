import React from 'react'
import CommentForm from '../components/CommentForm'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { contactInfo } from '../data/util'

export default class InfoContainer extends React.Component {
	render() {
		return (
			<div>
				<Tabs defaultActiveKey="message" id="uncontrolled-tab-example">
					<Tab eventKey="message" title="Send me a message">
						<CommentForm />
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