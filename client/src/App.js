import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AdminContainer from './containers/AdminContainer'
import CovidContainer from './containers/CovidContainer'
import HomeContainer from './containers/HomeContainer'
import PortfolioProjectContainer from './containers/PorfolioProjectsContainer'
import ResumeContainer from './containers/ResumeContainer'
import Navigation from './components/Navigation'

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
          <Route path="/admin" component={AdminContainer} />
        </Switch>
      </Router>
    )
  }
}