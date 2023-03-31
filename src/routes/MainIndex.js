import React from 'react'
import { SecFeaturedProps } from '../components/Main/MainIndex/SecFeaturedProps'
import { SecHero } from '../components/Main/MainIndex/SecHero'
import { SecUs } from '../components/Main/MainIndex/SecUs'

export const MainIndex = () => {
  return (
    <>
      <SecHero />
      <SecUs />
      <SecFeaturedProps />
    </>
  )
}
