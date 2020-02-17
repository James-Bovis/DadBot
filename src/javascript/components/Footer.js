// @flow

import * as React from 'react'

const footer = (): React.Element<'footer'> => (
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
      <a href='https://rundexter.com' rel='noopener noreferrer' target='_blank'>
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
)

export default footer
