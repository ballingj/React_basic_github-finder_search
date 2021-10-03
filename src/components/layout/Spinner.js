import React, {Fragment} from 'react'
import spinner from './spinner.gif'

export const Spinner = () => {
  return (
    <Fragment>
      <p>Loading...</p>
      <img src={spinner} alt='loading...' style={{ width: '200px', margin: 'auto', display: 'block' }} />
    </Fragment>
  )
}
