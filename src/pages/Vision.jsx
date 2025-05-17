import React from 'react'
import './vision.css'

const Vision = () => {
  return (
    <section class="vision-section">
      <div class="vision-container">
        <div class="vision-left">
          <img src="vision-img.gif" alt="Cognixis Vision" class="vision-img" />
        </div>
        <div class="vision-right">
          <div className='vis-heading-main' >
          <h2 >Our </h2>
          <h2 className='vis-heading' >Vision</h2>
          </div>
          <p>
            At <span class="brand-name">Cognixis</span>, our vision is to enable learners across all backgrounds
            to gain real-world experience through guided internships in today’s most in-demand tech fields.
          </p>
          <p>
            We are committed to bridging the gap between learning and doing by offering internships that
            are accessible, practical, and tailored to develop core technical skills in areas like 
            <span class="highlight">Web Development</span>, <span class="highlight">AI</span>,
            <span class="highlight">Data Science</span>, and more.
          </p>
          <p>
            Through structured tasks, support, and mentorship, we aim to empower individuals to grow
            confidently and step into the tech industry with clarity and competence.
          </p>
          <div class="vision-tagline">Empowering Future Tech Talent with Purpose.</div>
        </div>
      </div>
    </section>



  )
}

export default Vision
