import React from 'react'
import Home from './components/Home'
import RandomJoke from './components/RandomJoke'
import '../stylesheets/app.sass'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const app = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/random-joke' component={RandomJoke} />
    </Switch>
    <footer>
      <p>
        {`Built with love by `}
        <a
          href='https://jamesbovis.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          {'James Bovis'}
        </a>
        {` | DadBot is built using `}
        <a
          href='https://rundexter.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          {'DEXTER'}
        </a>
        {` Dadbot uses an API to deliver jokes to users. Thanks to `}
        <a href='icanhazdadjoke.com' target='_blank'>
          {`icanhazdadjoke.com `}
        </a>
        {`for providing the information. Thanks to `}
        <a href='https://giphy.com' rel='noopener noreferrer' target='_blank'>
          {`Giphy`}
        </a>
        {` and their awesome API for giving DadBot his amazing GIF replies.`}
      </p>
    </footer>
  </Router>
)

export default app
