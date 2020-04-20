import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

export default class ResumeContainer extends React.Component {
	render() {
		return (
			<div style={{ top: '50%', left: '50%', position: 'fixed' }}>
				<Spinner animation="border" variant="dark" />
			</div>
		)
	}
}