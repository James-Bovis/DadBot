import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <section className="background background--beige">
    <div className="container container--center container--full-height">
      <h1>{`Hi Internet. I'm DadBot.`}</h1>
      <p>
        {`I'm a fun, easy to use Facebook Messenger bot who lives right on your desktop or mobile phone. I'm available 24/7, 365 days a year to provide you with an endless amount of dad jokes.`}
      </p>
      <p>
        <Link to="/random-joke">Link</Link>
      </p>
    </div>
  </section>
)

export default Home
