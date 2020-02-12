// @flow

import * as React from 'react'

const RandomJoke = () => {
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
        <p>{'Random joke'}</p>
        <p>{loading ? 'Loading...' : joke}</p>
        <button onClick={(): void => getJoke()} className='btn btn--blue'>
          {`Get a new joke`}
        </button>
        <a
          href={`https://twitter.com/intent/tweet?text=${joke}`}
          className='btn btn--red'
        >
          {`Tweet joke`}
        </a>
      </div>
    </section>
  )
}

export default RandomJoke
