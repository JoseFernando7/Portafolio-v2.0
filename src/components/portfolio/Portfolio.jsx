import Grave from '../../assets/imgs/grave.png'
import AboutMe from '../content/about-me/AboutMe'
import Contacts from '../content/contacts/Contacts'
import Projects from '../content/projects/Projects'
import Skills from '../content/skills/Skills'
import Index from '../index/Index'

import './Portfolio.css'

function Portfolio () {
  return (
    <>
      <div className='parallax_cover'>
        <img src={Grave} alt='Grave' />

        <div className='portfolio-content'>
          <Index />

          <main className='main-content'>
            <AboutMe />
            <Skills />
            <Projects />
            <Contacts />
          </main>
        </div>
      </div>
    </>
  )
}

export default Portfolio
