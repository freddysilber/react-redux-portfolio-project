import React from 'react'
// import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faVirus, faCogs, faBriefcase, faBlog } from '@fortawesome/free-solid-svg-icons'
import { Nav } from 'react-bootstrap'

const Navigation = () => {
	return (
		<Nav fill variant="tabs" defaultActiveKey="/">
			<Nav.Item>
				<Nav.Link href="/" className="navLink" activeStyle={{ color: '#00D2A9', fontWeight: 'bold', textDecoration: 'underline' }}><FontAwesomeIcon icon={faHome} /></Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/resume" className="navLink" activeStyle={{ color: '#00D2A9', fontWeight: 'bold', textDecoration: 'underline' }}><FontAwesomeIcon icon={faBriefcase} /></Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/portfolioprojects" className="navLink" activeStyle={{ color: '#00D2A9', fontWeight: 'bold', textDecoration: 'underline' }}><FontAwesomeIcon icon={faGithub} /></Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/covid19" className="navLink" activeStyle={{ color: '#00D2A9', fontWeight: 'bold', textDecoration: 'underline' }}><FontAwesomeIcon icon={faVirus} /></Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/blog" className="navLink" activeStyle={{ color: '#00D2A9', fontWeight: 'bold', textDecoration: 'underline' }}><FontAwesomeIcon icon={faBlog} /></Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/admin" className="navLink" activeStyle={{ color: '#00D2A9', fontWeight: 'bold', textDecoration: 'underline' }}><FontAwesomeIcon icon={faCogs} /></Nav.Link>
			</Nav.Item>
		</Nav>
	)
}

export default Navigation