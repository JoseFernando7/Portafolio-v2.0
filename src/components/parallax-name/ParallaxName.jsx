import { useEffect, useState } from 'react'

import './ParallaxName.css'

function ParallaxName () {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    const textLoad = () => {
      setTimeout(() => {
        setDisplayText('Desarrollador Frontend ')
      }, 0)

      setTimeout(() => {
        setDisplayText('Desarrollador Backend ')
      }, 3000)

      setTimeout(() => {
        setDisplayText('Desarrollador Móvil ')
      }, 6000)

      setTimeout(() => {
        setDisplayText('Desarrollador de Videojuegos ')
      }, 9000)
    }

    textLoad()
    setInterval(textLoad, 12000)
  }, [])

  return (
    <>
      <div className='parallax_name'>
        <h2> Jose Fernando </h2>
        <h2> Restrepo Sánchez </h2>

        <div className='typerwritter'>
          <span className='typerwritter-text changing-text'>{displayText}</span>
        </div>
      </div>
    </>
  )
}

export default ParallaxName
