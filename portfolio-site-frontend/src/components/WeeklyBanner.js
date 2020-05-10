import React from 'react'
import { Alert } from 'react-bootstrap'

export default class WeeklyBanner extends React.Component {
	render() {
		return (
			<Alert variant="dark" style={{ marginBottom: '0' }}>
				<Alert.Heading>This Week's Highlight</Alert.Heading>
				<a href="https://freddysilber.github.io/">My Journey as a Software Engineer</a>
			</Alert>
		)
	}
}