import React from 'react'
import './Services.css'
import Servicecontainer from './Servicecontainer'
import Servicecontainer2 from './Servicecontainer2'
import { FaServicestack } from "react-icons/fa";


const Services = () => {
  return (
    <section className='services-sec' >
      <div className='ser-head' >
        <p className='our-serv-text' >
          
          <p className='our-s-t' >Our</p> <p className='our-serv-clr' >Services</p><div><FaServicestack /></div></p>
          
        <h3 className='services-heading' >Smart Tech Solutions. Real Business Results.</h3>
        <p className='serv-text-main' >At Cognixis, we deliver cutting-edge IT solutions for businesses of all sizes. Whether you're a startup looking to launch your product or an enterprise needing digital transformation, we offer reliable, scalable, and innovative services tailored to your goals.</p>
      </div>

      <div className="serv-divs">

        <Servicecontainer imageLink="web-serv.gif"  title=" Secure and Sustain Your Online Presence with Confidence" desc="We build modern websites and mobile apps that are fast, responsive, and built to scale. From intuitive designs to robust backends, our solutions are crafted to deliver performance and drive results across every device." tag1="UI/UX Focused" tag2="Performance Optimized" tag3="Mobile-First" />
        <div className='serv-divs-hr' ></div>
        <Servicecontainer2 imageLink="serv-sales.gif" title="Unlock Your Online Sales Potential" desc="Take your business online with seamless e-commerce platforms. We offer everything from custom store development and secure payment integration to product management and user experience optimization." tag1="Custom Storefronts" tag2="Secure Payments" tag3="User Experience" />
        <div className='serv-divs-hr' ></div>
        <Servicecontainer imageLink="serv-ai.gif" title="Make Smarter Decisions with Data & AI" desc="Turn complex data into powerful insights. Our AI and data science services help you automate workflows, predict outcomes, and personalize experiences with machine learning, analytics, and real-time dashboards." tag1="Predictive Analytics" tag2="Automation Tools" tag3="Real-Time Insights" />
        <div className='serv-divs-hr' ></div>

      </div>


    </section>
  )
}

export default Services
