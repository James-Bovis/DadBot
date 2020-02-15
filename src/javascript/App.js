// @flow

import * as React from 'react'
import '../stylesheets/app.sass'

import Home from './components/Home'
import RandomJoke from './components/RandomJoke'
import Footer from './components/Footer'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const app = (): React.Node => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/random-joke' component={RandomJoke} />
    </Switch>
    <Footer />
  </Router>
)

export default app
