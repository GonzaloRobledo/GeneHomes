import React from 'react'
import { useForm } from '../../hooks/useForm'

const initialFormTasaciones = {
  name: '',
  tel: '',
  email: '',
  consulta: ''
}

export const FormTasaciones = () => {
  const [formTas, errors, handleChange, handleSubmit, validForm] = useForm(
    initialFormTasaciones
  )

  return (
    <form className='form-tasaciones' onSubmit={handleSubmit}>
      <div>
        <input
          type='text'
          placeholder='Nombre'
          name='name'
          onChange={handleChange}
          value={formTas.name}
          data-pattern='^[A-Z]+(\s[A-Z]+)+$'
          className={`${
            formTas.name != '' && (errors.name ? 'not-valid' : 'valid')
          }`}
          required
        />
        <input
          type='tel'
          placeholder='Telefono'
          name='tel'
          onChange={handleChange}
          value={formTas.tel}
          data-pattern='^[0-9]{10}$'
          className={`${
            formTas.tel != '' && (errors.tel ? 'not-valid' : 'valid')
          }`}
          required
        />
      </div>
      <input
        type='email'
        placeholder='Email'
        name='email'
        onChange={handleChange}
        value={formTas.email}
        data-pattern='^[0-9A-Záéíóú._-]+\@(hotmail|gmail|outlook)\.(com|com\.ar)$'
        className={`${
          formTas.email != '' && (errors.email ? 'not-valid' : 'valid')
        }`}
        required
      />
      <textarea
        placeholder='Consulta'
        name='consulta'
        onChange={handleChange}
        value={formTas.consulta}
        required
      ></textarea>

      {validForm ? (
        <input type='submit' value='Enviar' className='send-tas' />
      ) : (
        <input type='submit' value='Enviar' className='send-tas' disabled />
      )}
    </form>
  )
}
