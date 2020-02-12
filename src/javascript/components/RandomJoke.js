import React from 'react'

const RandomJoke = () => (
  <section className='background background--beige'>
    <div className='container container--center container--full-height'>
      <p>{'Random joke'}</p>
      <a href='' className='btn btn--blue'>
        {`Get a new joke`}
      </a>
      <a href='' className='btn btn--red'>
        {`Tweet joke`}
      </a>
    </div>
  </section>
)

export default RandomJoke
