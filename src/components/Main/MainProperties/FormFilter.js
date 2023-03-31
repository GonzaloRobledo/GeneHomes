import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../context/AppContext'

export const FormFilter = () => {
  const { properties, handleChangeFormFilter, handleClickFilter } =
    useContext(AppContext)
  const [types, setTypes] = useState([])
  const [operations, setOperations] = useState([])
  const [neighboord, setNeighboord] = useState([])

  useEffect(() => {
    if (properties.length > 0) {
      setTypes(Array.from(new Set(properties.map(el => el.type))))
      setOperations(Array.from(new Set(properties.map(el => el.operation))))
      setNeighboord(Array.from(new Set(properties.map(el => el.neighboord))))
    }
  }, [properties])

  return (
    <form className='form-filter' onSubmit={handleClickFilter}>
      <select onChange={handleChangeFormFilter} name='type'>
        <option>Tipo Propiedad</option>
        {types.length > 0 &&
          types.map((el, index) => <option key={index}>{el}</option>)}
      </select>
      <select onChange={handleChangeFormFilter} name='operation'>
        <option>Operacion</option>
        {operations.length > 0 &&
          operations.map((el, index) => <option key={index}>{el}</option>)}
      </select>
      <select onChange={handleChangeFormFilter} name='neighboord'>
        <option>Barrio o Localidad</option>
        {neighboord.length > 0 &&
          neighboord.map((el, index) => <option key={index}>{el}</option>)}
      </select>
      <input type='submit' value='Buscar Propiedades' />
    </form>
  )
}
