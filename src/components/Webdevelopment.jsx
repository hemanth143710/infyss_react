import React from 'react'
import webdevelopmentimg from '../assets/images/webdevelopment.webp'
import '../assets/styles/webdevelopment.css'

const Webdevelopment = () => {
  return (
    <div className="webdevelopment-section">
      <div className="webdevelopment-section-left">
        <span>Web development</span>
        <p>
          At Infyss, we craft exceptional web development solutions designed to enhance your online presence and drive business growth. 
          Our expertise spans responsive website design, robust backend development, and seamless integrations to deliver 
          user-friendly and high-performing web applications. Whether you need a dynamic e-commerce platform, an engaging corporate website, 
          or a custom web application, Infyss combines innovation and technology to bring your vision to life. Partner with us to build 
          a digital experience that stands out in today's competitive landscape.
        </p>
      </div>
      <div className="webdevelopment-section-right">
        <img src={webdevelopmentimg} alt="webdevelopment image"></img>
      </div>
    </div>
  )
}

export default Webdevelopment
