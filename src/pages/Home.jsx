import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import './Home.css'
import InternshipProgram from '../components/InternshipProgram'
import Internships from '../components/Internships'
import SEO from '../components/SEO'

const Home = () => {
  return (
    <div>
      <SEO 
        title="Cognixis - Online Tech Internships & Professional Certifications"
        description="Start your tech career with Cognixis online internships. Get hands-on experience in web development, mobile app development, AI/ML, and data science. Earn industry-recognized certifications."
        keywords="online tech internships, web development internship, AI ML internship, data science internship, tech certification, professional development, Cognixis"
        canonicalUrl="/"
      />
      <Hero />
      <Services />
      <InternshipProgram />
      <Internships />
    </div>
  )
}

export default Home
