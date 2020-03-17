// @flow

import * as React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Home from './components/Home'
import RandomJoke from './components/RandomJoke'
import Footer from './components/Footer'

import type { Location } from 'react-transition-group'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const app = (): React.Node => (
  <Router>
    <Route
      render={({ location }: Location): React.Node => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='fade' timeout={250}>
            <Switch location={location}>
              <Route exact path='/' component={Home} />
              <Route exact path='/random-joke' component={RandomJoke} />
            </Switch>
          </CSSTransition>
          <Footer />
        </TransitionGroup>
      )}
    />
  </Router>
)

export default app
