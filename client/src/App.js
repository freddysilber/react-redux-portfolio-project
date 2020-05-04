import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AdminContainer, CovidContainer, HomeContainer, ResumeContainer, PorfolioProjectsContainer } from './containers'
import Navigation from './components/Navigation'
import Blog from './components/Blog'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/resume" component={ResumeContainer} />
          <Route path="/portfolioprojects" component={PorfolioProjectsContainer} />
          <Route path="/covid19" component={CovidContainer} />
          <Route path="/admin" component={AdminContainer} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </Router>
    )
  }
}