import React from 'react'
import Layer0 from '../../assets/imgs/layer0.png'
import Layer1 from '../../assets/imgs/layer1.png'
import Layer2 from '../../assets/imgs/layer2.png'
import Layer3 from '../../assets/imgs/layer3.png'

import './Parallax.css'
import './Responsive.css'
import ParallaxName from '../parallax-name/ParallaxName'
import Portfolio from '../portfolio/Portfolio'

function Parallax () {
  return (
    <>
      <section className='parallax'>
        <div className='parallax_layer parallax_layer_0'>
          <img src={Layer0} alt='Layer 0' />
          <ParallaxName />
        </div>

        <div className='parallax_layer parallax_layer_1'>
          <img src={Layer1} alt='Layer 1' />
        </div>

        <div className='parallax_layer parallax_layer_2'>
          <img src={Layer2} alt='Layer 2' />
        </div>

        <div className='parallax_layer parallax_layer_3'>
          <img src={Layer3} alt='Layer 3' />
        </div>

        <Portfolio />
      </section>
    </>
  )
}

export default Parallax
