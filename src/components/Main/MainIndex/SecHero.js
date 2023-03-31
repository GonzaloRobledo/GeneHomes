import React from 'react'
import { useScreenSize } from '../../../hooks/useScreenSize'

export const SecHero = () => {
  const [widthScreen] = useScreenSize()

  return (
    <section className='sec-hero'>
      <img
        src={`${
          widthScreen < 700
            ? 'https://i.pinimg.com/originals/1b/82/58/1b82580cf7fe9b8dad3814323e57b6a4.jpg'
            : 'http://2.bp.blogspot.com/-3yFFidXr-5k/UFosKWyShKI/AAAAAAAAnVM/BzCCxRHuSpE/s1600/Empire-State-Bulding-New-York-City_Fondos-de-Pantalla-de-Edificios.jpg'
        }`}
        alt='asd'
      />
    </section>
  )
}
