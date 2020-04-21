import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { contactInfo } from '../data/util'

export default class InfoContainer extends React.Component {
	constructor() {
		super()
		this.state = {
			message: ''
		}
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		console.log('NEED TO SUBMIT THIS MSG', this.state.message)
	}

	render() {
		return (
			<div>
				<Tabs defaultActiveKey="message" id="uncontrolled-tab-example">
					<Tab eventKey="message" title="Send me a message">
						<form onSubmit={this.handleSubmit}>
							<InputGroup>
								<InputGroup.Prepend>
									<InputGroup.Text>Leave a Message!</InputGroup.Text>
								</InputGroup.Prepend>
								<FormControl as="textarea" aria-label="message" name="message" onChange={this.handleChange} />
							</InputGroup>
							<br />
							<Button type="submit" variant="outline-success">Submit</Button>
						</form>
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