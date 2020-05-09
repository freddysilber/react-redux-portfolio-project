import React from 'react'
import { UsersContainer, JobListingsContainer } from '.'
import { Tab, Row, Col, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faUsers } from '@fortawesome/free-solid-svg-icons'

export default class AdminContainer extends React.Component {
	render() {
		return (
			<Tab.Container defaultActiveKey="users">
				<Row>
					<Col xs={1}>
						<Nav variant="pills" className="flex-column">
							<Nav.Item>
								<Nav.Link eventKey="users"><FontAwesomeIcon icon={faUsers} /></Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="jobListings"><FontAwesomeIcon icon={faBriefcase} /></Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col sm={9}>
						<Tab.Content>
							<Tab.Pane eventKey="users">
								<UsersContainer />
							</Tab.Pane>
							<Tab.Pane eventKey="jobListings">
								<JobListingsContainer />
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		)
	}
}