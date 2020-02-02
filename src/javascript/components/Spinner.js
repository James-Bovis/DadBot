// @flow

import * as React from 'react'

type SpinnerTheme = 'red' | 'white' | 'black'

type Props = {|
  spinnerTheme: SpinnerTheme,
|}

const spinner = (props: Props): React.Element<'div'> => (
  <div className={`spinner spinner--${props.spinnerTheme}`}>
    <div /> <div /> <div /> <div />
  </div>
)

export default spinner
