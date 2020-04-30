import React from 'react'
import { socialMediaUrls } from '../data/util'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

const SocialMediaIcons = () => {
	return (
		<ul className="socialMediaIconList">
			{/* <FontAwesomeIcon icon={faTwitter} href={socialMediaUrls.twitter} /> */}
			{/* <a href={socialMediaUrls.twitter} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fab fa-twitter fa-lg twitterIcon" icon={faTwitter} /></a> */}
			<a href={socialMediaUrls.twitter} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-lg twitterIcon"></i></a>
			<a href={socialMediaUrls.facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook fa-lg facebookIcon"></i></a>
			<a href={socialMediaUrls.instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-lg instagramIcon"></i></a>
			<a href={socialMediaUrls.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-lg githubIcon"></i></a>
			<a href={socialMediaUrls.linkedIn} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-lg linkedinIcon"></i></a>
			<a href={socialMediaUrls.youtube} target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube fa-lg youtubeIcon"></i></a>
		</ul>
	)
}

export default SocialMediaIcons