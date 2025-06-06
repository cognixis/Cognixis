import React from 'react'
import './InternshipProgram.css'
import { FaGraduationCap } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { GrCertificate } from "react-icons/gr";
import { GiNetworkBars } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import { FaLaptopCode } from "react-icons/fa";

const InternshipProgram = () => {
    return (
        <section className='intern-sec-main'>
            <div className="intern-sec-top-heading">

            <h1><p className='cog-int-cog' >Cognixis </p><div className='mobile-heading' ><p>Internship Program</p> <div><GiNetworkBars /></div> </div>  </h1>
            </div>
            <div className="intern-sec">


                <div className="intern-left">
                    <div className="intern-heading">
                        <FaLaptopCode className='lap-icn' color='black' />
                        <h1>Work With Us</h1>
                    </div>
                    <p className='intern-main-desc' >Step into the tech industry with confidence through the Cognixis Internship Program. Designed for students and aspiring professionals, our internships offer hands-on experience in Web Development, Mobile App Development, AI/ML, Data Science, and more.</p>
                    <div className="intern-tags">
                        <div className="i-tag">
                            <CiStar />
                            <p>Real Projects</p>
                        </div>
                        <div className="i-tag">
                            <IoCodeSlash />
                            <p>Guided Tasks</p>
                        </div>
                        <div className="i-tag">
                            <GrCertificate />
                            <p>Completion Certificate</p>
                        </div>
                    </div>
                    <div className='apl-btn-abv-txt' >
                        <p>Work on real projects, sharpen your skills with guided tasks, and earn a certificate of completion that proves your capabilities.</p>
                    </div>
                    

                    <a className="btn-register-r" href="https://docs.google.com/forms/d/e/1FAIpQLScBUYWrb9BGHAyVUcUFDn6OHovMDintUMXkbuGUCQba27NvhQ/viewform?usp=header">Apply Now</a>
                    {/* <NavLink to="/internships" className="btn-register-r">Apply Now</NavLink> */}
                    
                </div>
                <div className="intern-right">
                    <img src="internship-women.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default InternshipProgram
