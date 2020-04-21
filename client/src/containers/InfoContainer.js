import React from 'react'
import CommentForm from '../components/CommentForm'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { contactInfo } from '../data/util'
import UsersContainer from './UsersContainer'

export default class InfoContainer extends React.Component {
	render() {
		return (
			<div>
				<UsersContainer />
				<br />
				<Tabs defaultActiveKey="comment">
					<Tab eventKey="comment" title="Leave a comment">
						<CommentForm />
					</Tab>
					<Tab eventKey="allComments" title="All Comments">
						<p>show all comments here</p>
					</Tab>
					<Tab eventKey="contact" title="Contact Me">
						<div>
							<p>Personal Email: {contactInfo.personalEmail}</p>
							<p>Work Email: {contactInfo.workEmail}</p>
							<p>Phone: {contactInfo.phone}</p>
						</div>
					</Tab>
					<Tab eventKey="createUser" title="Log In / Sign up">
						<h4>Log In or Sign up!</h4>
						{/* <CreateUser /> */}
					</Tab>
				</Tabs>
			</div>
		)
	}
}