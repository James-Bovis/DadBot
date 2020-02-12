// @flow

import * as React from 'react'
import { Link } from 'react-router-dom'

type Greeting = 'Good morning' | 'Good evening' | 'Good afternoon'

const generateGreeting = (): Greeting => {
  const date = new Date()
  const hour = date.getHours()

  if (hour < 12) {
    return 'Good morning'
  } else if (hour >= 19) {
    return 'Good evening'
  } else {
    return 'Good afternoon'
  }
}

const Home = (): React.Element<'section'> => (
  <section className='background'>
    <div className='container container--center container--full-height container--wide'>
      <div className='home'>
        <div className='home__phone'>
          <img src='http://placehold.it/900' alt='' />
        </div>
        <div className='home__content'>
          <h1 className='home__content__title'>{`${generateGreeting()}. I'm DadBot.`}</h1>
          <p className='home__content__sub-title'>
            {`I'm a fun, easy to use Facebook Messenger bot who lives right on your desktop or mobile phone. I'm available 24/7, 365 days a year to provide you with an endless amount of dad jokes.`}
          </p>
          <Link
            to='/random-joke'
            className='btn btn--with-icon btn--with-icon--left'
          >
            <img src='http://placehold.it/50' alt='' />
            {'Message DadBot on Facebook'}
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default Home
