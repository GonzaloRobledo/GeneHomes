import React, { useState } from 'react'
import { useForm } from '../../../hooks/useForm'

const initialFormContact = {
  name: '',
  tel: '',
  email: '',
  consulta: ''
}

export const FormContact = () => {
  const [formContact, errors, handleChange, handleSubmit, validForm] =
    useForm(initialFormContact)

  return (
    <form className='form-contact' onSubmit={handleSubmit}>
      <div className='form-contact__flex'>
        <div className='form-contact__flex__inputs'>
          <input
            type='text'
            placeholder='Nombre y Apellido'
            name='name'
            onChange={handleChange}
            value={formContact.name}
            data-pattern='^[A-Z]+(\s[A-Z]+)+$'
            className={`${
              formContact.name != '' && (errors.name ? 'not-valid' : 'valid')
            }`}
            required
          />
          <input
            type='tel'
            placeholder='Telefono'
            name='tel'
            onChange={handleChange}
            value={formContact.tel}
            data-pattern='^[0-9]{10}$'
            className={`${
              formContact.tel != '' && (errors.tel ? 'not-valid' : 'valid')
            }`}
            required
          />
          <input
            type='email'
            placeholder='Email'
            name='email'
            onChange={handleChange}
            value={formContact.email}
            data-pattern='^[0-9A-Záéíóú._-]+\@(hotmail|gmail|outlook)\.(com|com\.ar)$'
            className={`${
              formContact.email != '' && (errors.email ? 'not-valid' : 'valid')
            }`}
            required
          />
        </div>
        <textarea
          placeholder='Consulta'
          name='consulta'
          onChange={handleChange}
          value={formContact.consulta}
          required
        ></textarea>
      </div>

      {validForm ? (
        <input type='submit' className='btn-send-contact' />
      ) : (
        <input type='submit' className='btn-send-contact' disabled />
      )}
    </form>
  )
}
