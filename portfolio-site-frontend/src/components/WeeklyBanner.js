import React from 'react'

export default class WeeklyBanner extends React.Component {
	render() {
		return (
			<center style={{ background: 'lightgray', color: 'black', padding: '1rem' }}>
				<h1>This Weeks Highlight: <a href="https://freddysilber.github.io/">My Journey as a Software Engineer</a></h1>
			</center>
		)
	}
}