import React from 'react'
import './Servicecontainer.css'
import { CgWebsite } from "react-icons/cg";

const Servicecontainer = (props) => {
  return (
    <>
      <div className="web-main-serv">
        <div className="web">

          <div className="web-img">
            <img src={props.imageLink} alt="" />
          </div>
          <div className='web-cont' >
            <h3>{props.title} </h3>
            <div className="serv-tags">
              <p>{props.tag1}</p>
              <p>{props.tag2}</p>
              <p>{props.tag3}</p>
            </div>
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Servicecontainer
