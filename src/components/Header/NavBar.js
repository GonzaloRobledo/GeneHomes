import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = ({
  navRef,
  handleToggleNav,
  handleOpenModalTasaciones
}) => {
  return (
    <nav className='navegation' ref={navRef}>
      <ul>
        <li>
          <NavLink to='/properties' onClick={handleToggleNav}>
            Propiedades
          </NavLink>
        </li>
        <li>
          <a href='/#sec-us' onClick={handleToggleNav}>
            Nosotros
          </a>
        </li>
        <li>
          <a href='#sec-contact' onClick={handleToggleNav}>
            Contacto
          </a>
        </li>
        <li>
          <a
            href='#'
            onClick={() => {
              if (handleToggleNav) handleToggleNav()
              handleOpenModalTasaciones()
            }}
          >
            Tasaciones
          </a>
        </li>
      </ul>
    </nav>
  )
}
