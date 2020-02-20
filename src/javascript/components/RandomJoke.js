// @flow

import * as React from 'react'
import { Link } from 'react-router-dom'
import DadBotIcon from '../../images/Dad-Bot-Icon-Mobile-02.svg'
import Spinner from './Spinner'

const RandomJoke = (): React.Element<'section'> => {
  const [joke, setJoke] = React.useState('')
  const [loading, setLoading] = React.useState(true)

  const fetchJoke = () => {
    fetch('https://icanhazdadjoke.com', {
      method: 'GET',
      headers: {
        Accept: 'text/plain',
        'Content-Type': 'text/plain',
      },
    })
      .then(response => {
        return response.text()
      })
      .then(data => {
        setJoke(data)
        setLoading(false)
      })
      .catch(error => console.log(`I had an error of ${error}`))
  }

  React.useEffect((): void => {
    fetchJoke()
  }, [])

  const getJoke = (): void => {
    setLoading(true)
    fetchJoke()
  }

  return (
    <section className='background background--beige'>
      <div className='container container--center container--full-height'>
        <div className='random-joke'>
          <Link to='/' className='random-joke__logo'>
            <img src={DadBotIcon} alt='' />
          </Link>
          {loading ? (
            <Spinner spinnerTheme='black' />
          ) : (
            <h1 className='random-joke__joke'>{joke}</h1>
          )}
          <div className='random-joke__btn-wrapper'>
            <button
              onClick={(): void => getJoke()}
              className='btn btn--white'
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Get a new joke'}
            </button>
            <a
              href={`https://twitter.com/intent/tweet?text=${joke}`}
              className='btn btn--blue'
            >
              {`Tweet joke`}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RandomJoke
