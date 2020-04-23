import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<div className="navbar navigation">
			<NavLink exact to='/' className="navLink" activeStyle={{ color: '#FFD6A1', fontWeight: 'bold', textDecoration: 'underline' }}>About Me</NavLink>
			<NavLink to='/resume' className="navLink" activeStyle={{ color: '#FFD6A1', fontWeight: 'bold', textDecoration: 'underline' }}>Resume</NavLink>
			<NavLink to='/portfolioprojects' className="navLink" activeStyle={{ color: '#FFD6A1', fontWeight: 'bold', textDecoration: 'underline' }}>Portfolio Projects</NavLink>
			<NavLink to='/covid19' className="navLink" activeStyle={{ color: '#FFD6A1', fontWeight: 'bold', textDecoration: 'underline' }}>Covid 19</NavLink>
			<NavLink to='/admin' className="navLink" activeStyle={{ color: '#FFD6A1', fontWeight: 'bold', textDecoration: 'underline' }}>Admin</NavLink>
		</div>
	)
}

export default Navigation