import React from 'react'
import InternshipProgram from '../components/InternshipProgram'
import './InternshipsPage.css'
import Internships from '../components/Internships'

const InternshipsPage = () => {
  return (
    <div className='internship-page' >
      <InternshipProgram />
      <Internships />
    </div>
  )
}

export default InternshipsPage
