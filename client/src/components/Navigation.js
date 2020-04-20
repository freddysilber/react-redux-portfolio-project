import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<div className="navbar">
			<NavLink exact to='/' activeStyle={{ color: 'lightgreen', fontWeight: 'bold' }}>About Me</NavLink>
			<NavLink to='/resume' activeStyle={{ color: 'lightpink', fontWeight: 'bold' }}>Resume</NavLink>
			<NavLink to='/portfolioprojects' activeStyle={{ color: 'lightskyblue', fontWeight: 'bold' }}>Portfolio Projects</NavLink>
			<NavLink to='/covid19' activeStyle={{ color: 'gold', fontWeight: 'bold' }}>Covid 19</NavLink>
		</div>
	)
}

export default Navigation