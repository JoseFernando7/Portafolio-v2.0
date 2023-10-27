import React from 'react'
import GitHub from '../../../assets/imgs/logos/GitHub.png'
import Gmail from '../../../assets/imgs/logos/Gmail.png'
import Linkedin from '../../../assets/imgs/logos/LinkedIn.png'

import './Contacts.css'

function Contacts () {
  return (
    <>
      <section className='skills contacts' id='contact'>
        <h2 className='section-title'> Contactos </h2>
        <section className='contact-icons'>
          <ul className='contact-list'>
            <li>
              <a href='https://github.com/JoseFernando7' target='_blank' rel='noreferrer'>
                <img src={GitHub} className='github-contact-icon' alt='GitHub contact' title='Ver mi perfil de GitHub' />
              </a>
            </li>
            <li>
              <a href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jose.f72000@gmail.com' target='_blank' rel='noreferrer'>
                <img src={Gmail} className='gmail-contact-icon' alt='Gmail contact' title='Enviar mensaje a mi Gmail' />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/jose-fernando-restrepo-sanchez-a697bb170/' target='_blank' rel='noreferrer'>
                <img src={Linkedin} className='linkedin-contact-icon' alt='Linkedin contact' title='Ver mi perfil de LinkedIn' />
              </a>
            </li>
          </ul>
        </section>
      </section>
    </>
  )
}

export default Contacts
