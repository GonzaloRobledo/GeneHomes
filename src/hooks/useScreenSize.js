import React, { useEffect, useState } from 'react'

export const useScreenSize = () => {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidthScreen(window.innerWidth)
    })

    return window.removeEventListener('resize', () => {
      setWidthScreen(window.innerWidth)
    })
  })

  return [widthScreen]
}
