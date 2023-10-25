import React from 'react'
import PropTypes from 'prop-types'
import GitHub from '../assets/imgs/logos/GitHub.png'

import './Button.css'

function Button ({ url }) {
  Button.propTypes = {
    url: PropTypes.string.isRequired
  }

  return (
    <>
      <div className='project-btn'>
        <a href={url} className='github-link' target='_blank' rel='noreferrer noopener'>
          <span />
          <span />
          <span />
          <span />
          Ver repositorio
          <img src={GitHub} alt='GitHub logo' />
        </a>
      </div>
    </>
  )
}

export default Button
