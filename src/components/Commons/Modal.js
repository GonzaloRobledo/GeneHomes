import React from 'react'

export const Modal = ({
  children,
  modalTasaciones,
  handleOpenModalTasaciones
}) => {
  return (
    <section className={`modal ${modalTasaciones && 'visible'}`}>
      <article>
        <div className='container-btn-close-modal'>
          <button
            onClick={handleOpenModalTasaciones}
            className='btn-close-modal'
          >
            X
          </button>
        </div>
        {children}
      </article>
    </section>
  )
}
