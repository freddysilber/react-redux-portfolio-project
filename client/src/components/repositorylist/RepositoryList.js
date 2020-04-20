import React from 'react'
import Card from 'react-bootstrap/Card'

const RepositoryList = props => {
	const listRepositories = () => {
		return props.repositories.map(repo =>
			<Card key={repo.id} style={{ width: '75%', margin: '.25rem', background: '#02375C' }}>
				<Card.Body>
					<Card.Title>
						<em><h4>
							<Card.Link className="cardLink" href={repo.html_url} style={{ color: '#FF6200' }}>{repo.name}</Card.Link>
						</h4></em>
					</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{repo.language}</Card.Subtitle>
					<Card.Text><b>Description: </b>{repo.description}</Card.Text>
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