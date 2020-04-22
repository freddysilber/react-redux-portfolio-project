import React from 'react'
import Card from 'react-bootstrap/Card'

const RepositoryList = props => {
	const listRepositories = () => {
		return props.repositories.map(repo =>
			<Card key={repo.id}>
				<Card.Body>
					<Card.Title>
						<em><h4>
							<Card.Link href={repo.html_url} className="cardLink">{repo.name}</Card.Link>
						</h4></em>
					</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{repo.language}</Card.Subtitle>
					<Card.Text><b>Description: </b>{repo.description}</Card.Text>
					<Card.Text><b>Forks: </b>{repo.forks}</Card.Text>
				</Card.Body>
			</Card >
		)
	}

	return listRepositories()
}

export default RepositoryList