import React from 'react'
import { FormTasaciones } from './FormTasaciones'

export const SecTasaciones = () => {
  return (
    <div className='sec-tasaciones__info'>
      <h2 className='sections-h2'>Tasá tu Propiedad</h2>
      <p>
        Para tasaciones completa el formulario o comunicate al{' '}
        <b>+54 9 11 5808-5588</b> o por WhatsApp
      </p>
      <FormTasaciones />
    </div>
  )
}
