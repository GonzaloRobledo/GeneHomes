import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { NavBar } from './NavBar'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Modal } from '../Commons/Modal'
import { SecTasaciones } from './SecTasaciones'
import { useModal } from '../../hooks/useModal'
import { useScreenSize } from '../../hooks/useScreenSize'

export const BarResponsive = () => {
  const [modalTasaciones, handleOpenModalTasaciones] = useModal()
  const [widthScreen] = useScreenSize()

  const navRef = useRef()

  const handleToggleNav = () => {
    navRef.current.classList.toggle('normal-height')
  }

  return (
    <section className='bar-responsive'>
      <div className='bar-responsive__bar container-90'>
        <NavLink to='/' className='logo'>
          Gene Homes
        </NavLink>
        {widthScreen <= 992 ? (
          <button className='btn-burger-menu' onClick={handleToggleNav}>
            <RxHamburgerMenu className='bars' />
          </button>
        ) : (
          <NavBar handleOpenModalTasaciones={handleOpenModalTasaciones} />
        )}
      </div>

      {widthScreen < 992 && (
        <NavBar
          navRef={navRef}
          handleToggleNav={handleToggleNav}
          handleOpenModalTasaciones={handleOpenModalTasaciones}
        />
      )}

      <Modal
        modalTasaciones={modalTasaciones}
        handleOpenModalTasaciones={handleOpenModalTasaciones}
      >
        <SecTasaciones />
      </Modal>
    </section>
  )
}
