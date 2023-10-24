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
      <section className='skills'>
        <h2> Mis Skills </h2>
        <div className='skills-imgs'>
          <img src={SpringBoot} alt='SpringBoot' />
          <img src={JavaScript} alt='JavaScript' />
          <img src={React} alt='React' />
          <img src={Java} alt='Java' />
          <img src={Css} alt='Css' />
          <img src={Html} alt='Html' />
          <img src={Python} alt='Python' />
          <img src={Angular} alt='Angular' />
          <img src={Cpp} alt='Cpp' />
          <img src={Mongo} alt='Mongo' />
          <img src={Postgres} alt='Postgres' />
          <img src={MySql} alt='MySql' />
        </div>
      </section>
    </>
  )
}

export default Skills
