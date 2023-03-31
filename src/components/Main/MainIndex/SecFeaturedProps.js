import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../../context/AppContext'
import { ItemProp } from '../../Commons/ItemProp'

export const SecFeaturedProps = () => {
  const { properties } = useContext(AppContext)
  const [feat, setFeat] = useState([])

  useEffect(() => {
    if (properties.length > 0) setFeat(properties.filter(el => el.featured))
  }, [properties])

  return (
    <section className='section-feat-props'>
      <div className='container-90'>
        <h2 className='sections-h2'>Propiedades destacadas</h2>
        {feat.length > 0 ? (
          <div className='list-properties'>
            {feat.map(el => (
              <ItemProp key={el.id} prop={el} />
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <NavLink to='/properties' className='section-feat-props__view-all'>
          Ver todas
        </NavLink>
      </div>
    </section>
  )
}
