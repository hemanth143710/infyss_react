import React from 'react'
import bgImage from "../assets/images/roboticsbg.jpg"; // Import image
import '../assets/styles/robotics.css';

const Robotics = () => {
  return (
    <div
      className="robotics-section"
      style={{
        backgroundImage: `url(${bgImage})`, // Inline style for dynamic URL
      }}
    >
      <div className="robotics-section-right">
        <h1>Robotics</h1>
        <p>
          At Infyss, we lead the way in developing advanced robotics solutions that revolutionize industries and transform the future. 
          Our expertise spans cutting-edge automation, AI-driven robotics, and intelligent systems designed to optimize operations 
          and enhance productivity. From industrial automation to smart robots for specialized tasks, Infyss delivers innovative 
          solutions that are reliable, efficient, and scalable. Experience the power of robotics tailored to your unique requirements 
          and let us help you embrace the future of intelligent automation with confidence and precision.
        </p>
      </div>
    </div>
  )
}

export default Robotics
