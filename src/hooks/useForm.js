import React, { useEffect, useState } from 'react'
import { validateForm } from '../helpers/validateForm'

export const useForm = initialForm => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [validForm, setValidForm] = useState(false)

  useEffect(
    () =>
      Object.keys(errors).length === 0
        ? setValidForm(true)
        : setValidForm(false),
    [errors]
  )

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })

    if (e.target.dataset.pattern) validateForm(e.target, errors, setErrors)
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert('Enviado')
  }

  return [form, errors, handleChange, handleSubmit, validForm]
}
