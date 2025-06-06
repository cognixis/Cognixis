import React from 'react'
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer">

      
      <div className="footer-navigation">
        <p>Main Links</p>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/internships" >Internships</NavLink>
        <NavLink to="/vision" >Vision</NavLink>
      </div>

      <div className="company-links">
        <p>Company Information</p>
        <NavLink to="/vision" >Company Vision</NavLink>
        <NavLink to="/contact-us" >Contact Us</NavLink>
        <NavLink to="/faqs" >Faqs</NavLink>
      </div>


      <div className="social">
        <p>Social Handles</p>
        <a href="https://www.linkedin.com/company/cognixis/" >Linkedin</a>
        <a href="https://x.com/CognixisService" >X</a>
      </div>

      <div className="join">

        <p>Internship Program</p>
        <NavLink to="/internships" >Apply Now </NavLink>
      </div>
      </div>
      <div>

      <p className='copyright' >© 2025 Cognixis. All rights reserved. 
</p>
      </div>
    </footer>
  )
}

export default Footer
