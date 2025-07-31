import React from 'react'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import FAQ from '../components/FAQ'
import Testimonials from '../components/Testimonials'
import ImageSection from '../components/ImageSection'
import FeatureSection from '../components/FeatureSection'
import Hero1 from '../components/Hero1'
import LanguageSupport from '../components/LanguageSupport'
import FoundersNote from '../components/FoundersNote'
import TherapyApproach from '../components/TherapyApproach'

const Home = () => {
  return (
    <>
    <div className='text-lg '>
      <Hero1/>
      <Hero/>
      <WhatWeDo/>
      {/* <ImageSection/> */}
      {/* <Testimonials/> */}\
      <LanguageSupport/>
      <FeatureSection/>
      <FoundersNote/>
      <TherapyApproach/>
      
      <FAQ/>
    </div>
    </>
  )
}

export default Home
