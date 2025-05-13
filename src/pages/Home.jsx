import React from 'react'
import Hero from '../components/Hero'
import LearnMore from '../components/LearnMore'
import Testimonials from '../components/Testimonials'
import Glimse from '../components/Glimse'
import ContactForm from '../components/Contactus'
import MainServices from '../components/MainServices'

function Home() {
  return (
    <div>
      <Hero/>
      <LearnMore/>
      <MainServices/>
      <Testimonials/>
      <Glimse/>
      <ContactForm/>
    </div>
  )
}

export default Home
