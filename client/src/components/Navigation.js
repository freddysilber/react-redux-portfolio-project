import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faVirus, faCogs, faBriefcase, faBlog } from '@fortawesome/free-solid-svg-icons'
import { Nav } from 'react-bootstrap'

const Navigation = () => {
	return (
		<Nav fill variant="tabs" defaultActiveKey="/">
			<Nav.Item>
				<Nav.Link href="/" className="navLink"><FontAwesomeIcon icon={faHome} /></Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/resume" className="navLink"><FontAwesomeIcon icon={faBriefcase} /></Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/portfolioprojects" className="navLink"><FontAwesomeIcon icon={faGithub} /></Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/covid19" className="navLink"><FontAwesomeIcon icon={faVirus} /></Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/blog" className="navLink"><FontAwesomeIcon icon={faBlog} /></Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/admin" className="navLink"><FontAwesomeIcon icon={faCogs} /></Nav.Link>
			</Nav.Item>
		</Nav>
	)
}

export default Navigation