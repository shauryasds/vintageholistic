import React from 'react'
import Hero from '../components/Hero'
import LearnMore from '../components/LearnMore'
import Testimonials from '../components/Testimonials'
import Glimse from '../components/Glimse'
import ContactForm from '../components/Contactus'
import MainServices from '../components/MainServices'
import TopBar from '../components/TopBar'
import AnnouncementBar from '../components/AnnouncementBar'

function Home() {
  return (
    <div>
      <Hero />
      <AnnouncementBar />
      <LearnMore />
      <MainServices />
      <Testimonials />
      <Glimse />
      <ContactForm />
    </div>
  )
}

export default Home
