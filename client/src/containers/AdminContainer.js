import React from 'react'
import UsersContainer from './UsersContainer'
import JobListingsContainer from './JobListingsContainer'
import { Tab, Row, Col, Nav } from 'react-bootstrap'

export default class AdminContainer extends React.Component {
	render() {
		return (
			<Tab.Container defaultActiveKey="users">
				<Row>
					<Col xs={2}>
						<Nav variant="pills" className="flex-column">
							<Nav.Item>
								<Nav.Link eventKey="users">Users</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="jobListings">Job Listings (Resume)</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col sm={9}>
						<Tab.Content>
							<Tab.Pane eventKey="users">
								<UsersContainer />
							</Tab.Pane>
							<Tab.Pane eventKey="jobListings">
								<h1>Edit/ Create Job Listings</h1>
								<JobListingsContainer />
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		)
	}
}