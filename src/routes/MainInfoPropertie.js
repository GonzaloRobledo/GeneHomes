import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { AppContext } from '../context/AppContext'

/**ICONS**/
import {
  BsSuperscript,
  BsCalendarDate,
  BsChevronLeft,
  BsChevronRight
} from 'react-icons/bs'
import { MdOutlineSpaceDashboard, MdOutlineBathtub } from 'react-icons/md'
import { GiWindow, GiHomeGarage } from 'react-icons/gi'
import { HiOutlineNewspaper } from 'react-icons/hi'
import { AiOutlinePicture } from 'react-icons/ai'

export const MainInfoPropertie = () => {
  const { properties } = useContext(AppContext)
  const { id } = useParams()

  const [imageSelect, setImageSelect] = useState(0)

  const [propertie, setPropertie] = useState(null)

  useEffect(() => {
    setPropertie(properties.find(el => el.id == id))
  }, [id])

  const nextImage = () => {
    if (imageSelect !== propertie.images.length - 1)
      setImageSelect(imageSelect + 1)
  }

  const prevImage = () => {
    if (imageSelect !== 0) setImageSelect(imageSelect - 1)
  }

  return (
    <>
      {propertie ? (
        <section className='sec-info-propertie container-90'>
          <article className='flex-data'>
            <div className='sec-info-propertie__image'>
              <img src={propertie.images[imageSelect]} alt={propertie.street} />
              <div>
                <BsChevronLeft onClick={prevImage} />
                <BsChevronRight onClick={nextImage} />
              </div>
            </div>
            <div>
              <h2 className='sec-info-propertie__street'>{propertie.street}</h2>
              <p className='sec-info-propertie__zones'>
                {propertie.zone} | {propertie.neighboord} |{' '}
                {propertie.subNeighboord}
              </p>
              <p className='sec-info-propertie__type'>
                {propertie.type} | {propertie.operation}
              </p>
              <p className='sec-info-propertie__ambients'>
                {propertie.ambients} ambiente(s)
              </p>
              <h3 className='sec-info-propertie__price'>
                USD {propertie.price}
              </h3>
              <div className='sec-info-propertie__aditional-info'>
                <div>
                  <BsSuperscript className='sec-info-propertie__aditional-info__icon' />
                  <h3>Superficie</h3>
                  <p>{propertie.area} mts.</p>
                </div>
                <div>
                  <MdOutlineSpaceDashboard className='sec-info-propertie__aditional-info__icon' />
                  <h3>Disposicion</h3>
                </div>
                <div>
                  <GiWindow className='sec-info-propertie__aditional-info__icon' />
                  <h3>Orientacion</h3>
                </div>
                <div>
                  <HiOutlineNewspaper className='sec-info-propertie__aditional-info__icon' />
                  <h3>Expensas</h3>
                  <p>{propertie.expenses}</p>
                </div>
                <div>
                  <BsCalendarDate className='sec-info-propertie__aditional-info__icon' />
                  <h3>Antiguedad</h3>
                  <p>{propertie.antique} años.</p>
                </div>
                <div>
                  <AiOutlinePicture className='sec-info-propertie__aditional-info__icon' />
                  <h3>Ambientes</h3>
                  <p>{propertie.ambients}</p>
                </div>
                <div>
                  <MdOutlineBathtub className='sec-info-propertie__aditional-info__icon' />
                  <h3>Baños</h3>
                  <p>{propertie.bathrooms}</p>
                </div>
                <div>
                  <GiHomeGarage className='sec-info-propertie__aditional-info__icon' />
                  <h3>Cocheras</h3>
                  <p>{propertie.garages}</p>
                </div>
              </div>
            </div>
          </article>

          <div className='description-propertie'>
            <h3>La Propiedad</h3>
            <p>{propertie.description}</p>
          </div>
        </section>
      ) : (
        <div>Sin datos</div>
      )}
    </>
  )
}
