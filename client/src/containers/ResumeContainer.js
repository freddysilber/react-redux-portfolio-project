import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Counter from '../components/Counter'

export default class ResumeContainer extends React.Component {
	render() {
		return (
			<div className="text-center">
				{/* <div style={{ top: '50%', left: '50%', position: 'fixed' }}> */}
				<Spinner animation="border" variant="dark" />
				<Counter />
			</div>
		)
	}
}