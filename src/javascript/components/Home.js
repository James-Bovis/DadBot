// @flow

import * as React from 'react'
import { Link } from 'react-router-dom'

import FacebookMessengerIcon from '../../images/messengerLogo.svg'
import DadBotIcon from '../../images/Dad-Bot-Icon-Mobile-02.svg'
import iPhone from '../../images/iphone-mockup.png'

type Greeting = 'Good morning' | 'Good evening' | 'Good afternoon'

const generateGreeting = (): Greeting => {
  const date = new Date()
  const hour = date.getHours()

  if (hour < 12) {
    return 'Good morning'
  } else if (hour >= 18) {
    return 'Good evening'
  } else {
    return 'Good afternoon'
  }
}

const Home = (): React.Element<'section'> => (
  <section className='background'>
    <div className='container container--center container--full-height container--wide'>
      <div className='home'>
        <img className='home__icon' src={DadBotIcon} alt='' />
        <div className='home__phone'>
          <img src={iPhone} alt='' />
        </div>
        <div className='home__content'>
          <h1 className='home__content__title'>{`${generateGreeting()}. I'm DadBot.`}</h1>
          <p className='home__content__sub-title'>
            {`I'm a fun, easy to use Facebook Messenger bot who lives right on your desktop or mobile phone. I'm available 24/7, 365 days a year to provide you with an endless amount of dad jokes.`}
          </p>
          <a
            href='https://m.me/DadJokeBot'
            className='btn btn--with-icon btn--with-icon--left'
            rel='noopener noreferrer'
            target='_blank'
          >
            <img src={FacebookMessengerIcon} alt='' />
            {'Message DadBot on Facebook'}
          </a>
          <div className='home__content__link'>
            {`or tell me a `}
            <Link to='/random-joke'>{`random joke...`}</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Home
