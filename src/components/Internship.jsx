// import React from 'react'
// import './Internship.css'

// const Internship = () => {
//     return (
//         <div className='intern-div-main' >
//             <a className='internship-anchor' href="https://www.google.com">
//                 <div className='intern-div'>


//                     <img src="web-intern.gif" alt="" />
//                     <h1 className='intern-domain' >Web Developer</h1>
//                     <p className='internship-desc' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magni earum quasi aspernatur numquam repudiandae!</p>
//                     <a className='apl-btn' href="www.google.com">Apply</a>
//                 </div>
//                 </a>
   
//         </div>

//     )
// }

// export default Internship



import React from 'react';
import './Internship.css';

const Internship = (props) => {
  return (
    <div className='internship-card-container'>
      <a className='internship-card' href="https://docs.google.com/forms/d/e/1FAIpQLScBUYWrb9BGHAyVUcUFDn6OHovMDintUMXkbuGUCQba27NvhQ/viewform?usp=header" rel="noopener noreferrer">
        <img className="internship-image" src={props.internImg} alt="Web Developer Internship" />
        <div className="internship-content">
          <h2 className='internship-title'>{props.internDomain}</h2>
          <p className='internship-desc'>
            {props.DomainDesc}
          </p>
          <div className="apply-btn">Apply Now</div>
        </div>
      </a>
    </div>
  );
};

export default Internship;
