import React from 'react'
import './Hero.css'
import { NavLink, useNavigate } from 'react-router-dom'

const Hero = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/internships');
  };

  return (
    <section className='hero-section' >
      <div className="hero-img">
        <img src="hero-techs.jpg" alt="" />
      </div>
      <div className="hero-text">
        <h1 className='hero-text-heading' >Build Skills That Get You Hired</h1>
        <p>Launch your career with our on role internships, hands-on projects, and a certificate that speaks for your skills.</p>
        <button onClick={handleClick} >Apply Now</button>
      </div>
     </section>
 )
}

export default Hero
