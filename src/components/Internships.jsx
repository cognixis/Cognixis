import React from 'react'
import './Internships.css'
import Internship from './Internship'
const Internships = () => {
  return (
    
    <section className='internship-sec' >
      <div className='serv-divs-hr' ></div>

      <div className="avl-intern-heading">
        <h1 className='avl-int-h1' ><h1>Available</h1> <div className='avl-inter-stl' ><p>Internships</p> <img src="intern-bag.gif" alt="" /></div> </h1>
      </div>
      <div className="internship-containers">
        <Internship internImg="web-intern.gif" internDomain="Web Developer" DomainDesc="Work on real website tasks using HTML, CSS. Build your skills through practical assignments and team projects." />

        <Internship internImg="ai-intern.gif" internDomain="AI Engineer" DomainDesc="Get hands-on with basic AI concepts. Assist in building simple models and understand how AI works in real projects." />

        <Internship internImg="java-intern.gif" internDomain="Java Developer" DomainDesc="Join real backend projects using Java. Learn how Java is used in building applications and contribute to beginner-level modules." />

        <Internship internImg="python-intern.gif" internDomain="Python Developer" DomainDesc="Take part in real Python tasks—from scripting to backend logic. Ideal for applying your Python knowledge in practical work." />

        <Internship internImg="fullstack-intern.gif" internDomain="Full Stack Web Dev" DomainDesc="Get involved in both frontend and backend work. Build mini full stack projects and experience how real development teams work." />

        <Internship internImg="app-intern.gif" internDomain="App Developer" DomainDesc="Contribute to mobile app features using Flutter or React Native. Learn how app screens and functions are developed in teams." />

        <Internship internImg="data-intern.gif" internDomain="Data Science" DomainDesc="Work with real datasets to find insights, visualize results, and support simple machine learning tasks in live projects." />

        <Internship internImg="prompt-intern.gif" internDomain="Prompt Engineer" DomainDesc="Help design prompts for AI tools like ChatGPT. Understand how prompts affect outputs and explore creative AI use cases." />



      </div>

    </section>
  )
}

export default Internships
