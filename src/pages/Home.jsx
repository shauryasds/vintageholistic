
import Hero from '../components/Hero'
import LearnMore from '../components/LearnMore'
import Testimonials from '../components/Testimonials'
import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

const Glimse = lazy(() => import('../components/Glimse'));

import ContactForm from '../components/Contactus'
import MainServices from '../components/MainServices'
import TopBar from '../components/TopBar'
import AnnouncementBar from '../components/AnnouncementBar'

function Home() {
  return (
    <div className=''>
      <Hero />
      <AnnouncementBar />
      {/* <LearnMore /> */}
      <MainServices />
      <Testimonials />
      <Suspense fallback={<div className='w-32 h-32 m-auto animate-spin rounded-full border-4 border-dashed border-pink-400'></div>}>
        <Glimse />
      </Suspense>


      <ContactForm />


    </div>
  )
}

export default Home
