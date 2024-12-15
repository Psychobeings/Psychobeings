import React from 'react'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import FAQ from '../components/FAQ'
import Testimonials from '../components/Testimonials'
import ImageSection from '../components/ImageSection'
import FeatureSection from '../components/FeatureSection'

const Home = () => {
  return (
    <>
    <div className='text-lg'>
      <Hero/>
      <WhatWeDo/>
      <ImageSection/>
      {/* <Testimonials/> */}
      <FeatureSection/>
      <FAQ/>
    </div>
    </>
  )
}

export default Home
