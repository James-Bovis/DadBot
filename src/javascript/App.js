import React, { lazy, Suspense } from 'react'
import '../stylesheets/app.sass'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Home = lazy(() => import('./components/Home'))
const RandomJoke = lazy(() => import('./components/RandomJoke'))

const app = () => (
  <Router>
    <Suspense fallback={''}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/random-joke" component={RandomJoke} />
      </Switch>
    </Suspense>
    <footer>
      <p>
        Built with by James Bovis | DadBot is built using DEXTER Dadbot uses an
        API to deliver jokes to users. Thanks to icanhazdadjoke.com for
        providing the information. Thanks to GIPHY and their awesome API for
        giving DadBot his amazing GIF replies.
      </p>
    </footer>
  </Router>
)

export default app
