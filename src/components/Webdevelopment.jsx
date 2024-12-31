import React from 'react'
import webdevelopmentimg from '../assets/images/webdevelopment.webp'
import '../assets/styles/webdevelopment.css'

const Webdevelopment = () => {
  return (
    <div className="webdevelopment-section">
      <div className="webdevelopment-section-left">
        <span>Web development</span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
          fugit dolores placeat, eius animi alias, neque voluptate, corrupti
          labore ducimus officiis repudiandae saepe autem nostrum in facere
          molestias? Unde dolores inventore cumque, id nesciunt nemo quidem
          sequi ex vero corrupti?
        </p>
      </div>
      <div className="webdevelopment-section-right">
        <img src={webdevelopmentimg} alt="webdevelopment image"></img>
      </div>
    </div>
  )
}

export default Webdevelopment
