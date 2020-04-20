import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
	return (
		<div className="navbar navigation">
			<NavLink exact to='/' className="navLink" activeStyle={{ color: '#905100', fontWeight: 'bold' }}>About Me</NavLink>
			<NavLink to='/resume' className="navLink" activeStyle={{ color: '#005D48', fontWeight: 'bold' }}>Resume</NavLink>
			<NavLink to='/portfolioprojects' className="navLink" activeStyle={{ color: '#FF6200', fontWeight: 'bold' }}>Portfolio Projects</NavLink>
			<NavLink to='/covid19' className="navLink" activeStyle={{ color: '#0A7FD2', fontWeight: 'bold' }}>Covid 19</NavLink>
		</div>
	)
}

export default Navigation