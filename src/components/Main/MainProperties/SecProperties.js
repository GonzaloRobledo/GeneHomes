import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../context/AppContext'
import { ItemProp } from '../../Commons/ItemProp'
import { BsChevronRight } from 'react-icons/bs'
import { BsChevronLeft } from 'react-icons/bs'

export const SecProperties = () => {
  const { propertiesView, pages, prevPage, nextPage } = useContext(AppContext)
  const [auxPages, setAuxPages] = useState([])

  useEffect(() => {
    const aux = []
    const max = Number.isInteger(pages.cantTotal)
      ? pages.cantTotal
      : parseInt(pages.cantTotal) + 1

    for (let i = 0; i < max; i++) aux.push(i + 1)
    setAuxPages(aux)
  }, [pages])

  return (
    <section className='container-90'>
      {propertiesView.length > 0 ? (
        <>
          <div className='list-properties'>
            {propertiesView.map(el => (
              <ItemProp key={el.id} prop={el} />
            ))}
          </div>

          <div className='pagination'>
            <BsChevronLeft onClick={prevPage} className='arrow' />

            {auxPages.map(el => (
              <div
                key={el}
                className={`${pages.page + 1 == el && 'page-select'}`}
              >
                {el}
              </div>
            ))}

            <BsChevronRight onClick={nextPage} className='arrow' />
          </div>
        </>
      ) : (
        <p className='with-out-results'>Sin resultados...</p>
      )}
    </section>
  )
}
