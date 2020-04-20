import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

export default class ResumeContainer extends React.Component {
	render() {
		return (
			<div>
				<p>Resume Container</p>
				<Spinner animation="border" variant="dark" />
			</div>
		)
	}
}