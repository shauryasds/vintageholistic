import React from 'react'
import Hero from '../components/Hero'
import LearnMore from '../components/LearnMore'
import Testimonials from '../components/Testimonials'
import Glimse from '../components/Glimse'
import ContactForm from '../components/Contactus'

function Home() {
  return (
    <div>
      <Hero/>
      <LearnMore/>
      <Testimonials/>
      <Glimse/>
      <ContactForm/>
    </div>
  )
}

export default Home
