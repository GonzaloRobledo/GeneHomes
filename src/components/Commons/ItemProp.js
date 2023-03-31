import React from 'react'
import { useNavigate } from 'react-router'

export const ItemProp = ({ prop }) => {
  const navigate = useNavigate()

  const navigateInfo = () => navigate(`/properties/${prop.id}`)

  return (
    <article className='item-prop' onClick={navigateInfo}>
      <img src={prop.images[0]} alt='property' className='item-prop__image' />
      <div className='item-prop__info'>
        <h3 className='item-prop__street'>{prop.street}</h3>
        <p className='item-prop__zones'>
          {prop.zone} | {prop.neighboord} | {prop.subNeighboord}
        </p>
        <p className='item-prop__type'>
          {prop.type} - {prop.operation}
        </p>
        <p className='item-prop__ambients'>{prop.ambients} ambiente(s)</p>
        <p className='item-prop__price'>
          <b>USD {prop.price}</b>
        </p>
      </div>
    </article>
  )
}
