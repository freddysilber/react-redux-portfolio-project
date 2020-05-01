import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faVirus, faCogs, faBriefcase, faBlog } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
	return (
		<div className="navbar navigation">
			<NavLink exact to='/' className="navLink" activeStyle={{ color: '#FFD6A1', fontWeight: 'bold', textDecoration: 'underline' }}><FontAwesomeIcon icon={faHome} /></NavLink>
			<NavLink to='/resume' className="navLink" activeStyle={{ color: '#FFD6A1', fontWeight: 'bold', textDecoration: 'underline' }}><FontAwesomeIcon icon={faBriefcase} /></NavLink>
			<NavLink to='/portfolioprojects' className="navLink" activeStyle={{ color: '#FFD6A1', fontWeight: 'bold', textDecoration: 'underline' }}><FontAwesomeIcon icon={faGithub} /></NavLink>
			<NavLink to='/covid19' className="navLink" activeStyle={{ color: '#FFD6A1', fontWeight: 'bold', textDecoration: 'underline' }}><FontAwesomeIcon icon={faVirus} /></NavLink>
			<NavLink to='/admin' className="navLink" activeStyle={{ color: '#FFD6A1', fontWeight: 'bold', textDecoration: 'underline' }}><FontAwesomeIcon icon={faCogs} /></NavLink>
			<NavLink to='/blog' className="navLink" activeStyle={{ color: '#FFD6A1', fontWeight: 'bold', textDecoration: 'underline' }}><FontAwesomeIcon icon={faBlog} /></NavLink>
		</div>
	)
}

export default Navigation