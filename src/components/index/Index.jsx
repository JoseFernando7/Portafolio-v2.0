import React from 'react'
import { Link } from 'react-scroll'

import './Index.css'

function Index () {
  const handleAboutMeScroll = () => {
    const element = document.getElementById('aboutMe')
    element.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSkillsScroll = () => {
    const element = document.getElementById('skills')
    element.scrollIntoView({ behavior: 'smooth' })
  }

  const handleProjectsScroll = () => {
    const element = document.getElementById('projects')
    element.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContactScroll = () => {
    const element = document.getElementById('contact')
    element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <aside className='index'>
        <h2 className='index-title'> Mi Portafolio </h2>
        <ul className='index-list'>
          <li>
            <Link onClick={handleAboutMeScroll} className='index-element'>
              <span className='line' /> Sobre mi
            </Link>
          </li>
          <li>
            <Link onClick={handleSkillsScroll} className='index-element'>
              <span className='line' /> Habilidades
            </Link>
          </li>
          <li>
            <Link onClick={handleProjectsScroll} className='index-element'>
              <span className='line' /> Proyectos
            </Link>
          </li>
          <li>
            <Link onClick={handleContactScroll} className='index-element'>
              <span className='line' /> Contacto
            </Link>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default Index
