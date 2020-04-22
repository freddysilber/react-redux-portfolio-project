import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<div className="navbar navigation">
			<NavLink exact to='/' className="navLink" activeStyle={{ color: '#90BDDC', fontWeight: 'bold' }}>About Me</NavLink>
			<NavLink to='/resume' className="navLink" activeStyle={{ color: '#90BDDC', fontWeight: 'bold' }}>Resume</NavLink>
			<NavLink to='/portfolioprojects' className="navLink" activeStyle={{ color: '#90BDDC', fontWeight: 'bold' }}>Portfolio Projects</NavLink>
			<NavLink to='/covid19' className="navLink" activeStyle={{ color: '#90BDDC', fontWeight: 'bold' }}>Covid 19</NavLink>
			<NavLink to='/info' className="navLink" activeStyle={{ color: '#90BDDC', fontWeight: 'bold' }}>Info</NavLink>
		</div>
	)
}

export default Navigation