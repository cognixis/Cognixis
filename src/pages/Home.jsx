import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import './Home.css'
import InternshipProgram from '../components/InternshipProgram'
import Internships from '../components/Internships'

const Home = () => {
  return (
    <div>
      
      <Hero />
      <Services />
      <InternshipProgram />
      <Internships />
      
    </div>
  )
}

export default Home
