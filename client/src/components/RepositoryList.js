import React from 'react'
import Card from 'react-bootstrap/Card'

const RepositoryList = props => {
	const listRepositories = () => {
		return props.repositories.map(repo =>
			<Card key={repo.id} style={{ width: '75%', margin: '.25rem' }}>
				<Card.Body>
					<Card.Title><em>{repo.name}</em></Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{repo.language}</Card.Subtitle>
					<Card.Text><b>Description: </b>{repo.description}</Card.Text>
					<Card.Link href={repo.html_url}>{repo.name}</Card.Link>
				</Card.Body>
			</Card >
		)
	}

	return (
		<div>
			<br />
			<h2>Check out my projects!</h2>
			<br />
			{listRepositories()}
		</div>
	)
}

export default RepositoryList