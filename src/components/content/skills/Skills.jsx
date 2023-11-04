import SpringBoot from '../../../assets/imgs/logos/springboot.png'
import JavaScript from '../../../assets/imgs/logos/JavaScript.png'
import React from '../../../assets/imgs/logos/React.png'
import Java from '../../../assets/imgs/logos/Java.png'
import Css from '../../../assets/imgs/logos/CSS.png'
import Html from '../../../assets/imgs/logos/HTML.png'
import Python from '../../../assets/imgs/logos/Python.png'
import Angular from '../../../assets/imgs/logos/Angular.png'
import Cpp from '../../../assets/imgs/logos/cpp.png'
import Mongo from '../../../assets/imgs/logos/mongo.png'
import Postgres from '../../../assets/imgs/logos/Postgres.png'
import MySql from '../../../assets/imgs/logos/MySql.png'

import './Skills.css'

function Skills () {
  return (
    <>
      <section className='skills skill-section' id='skills'>
        <h2 className='section-title'> Mis Habilidades </h2>
        <div className='skills-imgs'>
          <img src={SpringBoot} alt='SpringBoot' title='SpringBoot' />
          <img src={JavaScript} alt='JavaScript' title='JavaScript' />
          <img src={React} alt='React' title='Ract' />
          <img src={Java} alt='Java' title='Java' />
          <img src={Css} alt='Css' title='CSS' />
          <img src={Html} alt='Html' title='HTML' />
          <img src={Python} alt='Python' title='Python' />
          <img src={Angular} alt='Angular' title='Angular' />
          <img src={Cpp} alt='Cpp' title='C++' />
          <img src={Mongo} alt='Mongo' title='Mongo' />
          <img src={Postgres} alt='Postgres' title='Postgresql' />
          <img src={MySql} alt='MySql' title='MySql' />
        </div>

        <div className='certificate-container'>
          <h4 className='certificate'>
            Inglés nivel C1 según el test EF Set. Puedes verlo
            <a href='https://drive.google.com/file/d/1W0HRx2WE_xmxXktuET5FSK_p_OMuZrP9/view?usp=sharing' target='_blank' rel='noreferrer'> aquí </a>
          </h4>
        </div>
      </section>
    </>
  )
}

export default Skills
