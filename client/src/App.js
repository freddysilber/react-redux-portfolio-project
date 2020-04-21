import React from 'react'
import Navigation from './components/Navigation'
import CovidContainer from './containers/CovidContainer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PortfolioProjectContainer from './containers/PorfolioProjectsContainer'
import HomeContainer from './containers/HomeContainer'
import ResumeContainer from './containers/ResumeContainer'
import InfoContainer from './containers/InfoContainer'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/resume" component={ResumeContainer} />
          <Route path="/portfolioprojects" component={PortfolioProjectContainer} />
          <Route path="/covid19" component={CovidContainer} />
          <Route path="/info" component={InfoContainer} />
        </Switch>
      </Router>
    )
  }
}