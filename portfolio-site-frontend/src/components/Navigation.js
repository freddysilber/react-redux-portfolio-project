import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faVirus, faCogs, faBriefcase, faBlog } from '@fortawesome/free-solid-svg-icons'
import { Nav } from 'react-bootstrap'
import Octicon, { Repo } from '@primer/octicons-react'

const Navigation = () => {
	return (
		<Nav fill variant="pills" defaultActiveKey="/" activeKey={window.location.pathname}>
			<Nav.Item>
				<Nav.Link href="/" className="navLink"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
			</Nav.Item>
			{/* <Nav.Item>
				<Nav.Link href="/resume" className="navLink"><FontAwesomeIcon icon={faBriefcase} /> Resume</Nav.Link>
			</Nav.Item> */}
			<Nav.Item>
				<Nav.Link href="/portfolioprojects" className="navLink"><Octicon icon={Repo} /> Projects</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/covid19" className="navLink"><FontAwesomeIcon icon={faVirus} /> Covid19</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/blog" className="navLink"><FontAwesomeIcon icon={faBlog} /> Blog</Nav.Link>
			</Nav.Item>
			{/* <Nav.Item>
				<Nav.Link href="/admin" className="navLink"><FontAwesomeIcon icon={faCogs} /></Nav.Link>
			</Nav.Item> */}
		</Nav>
	)
}

export default Navigation