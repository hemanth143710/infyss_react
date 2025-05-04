import React from 'react'
import bgImage from "../assets/images/enterpriseai.jpg"; // Import image
import '../assets/styles/enterpriseaisolutions.css';

const EnterpriseAiSolutions = () => {
  return (
    <div
      className="enterpriseaisolutions-section"
      style={{
        backgroundImage: `url(${bgImage})`, // Inline style for dynamic URL
        backgroundSize: "cover", // Ensure the background covers the container
        backgroundRepeat: "no-repeat", // Prevent repetition
        backgroundPosition: "top left", // Center the background image
        overflow: "hidden", // Remove scrollbars
        height: "100vh", // Make sure it fits the viewport height
        width: "100%", // Full width of the container
      }}
    >
      <div
        className="enterpriseaisolutions-section-right"
      >
        <h1>Enterprise AI Solutions</h1>
        <p>
          At Infyss, we provide cutting-edge Enterprise AI solutions tailored to empower businesses with intelligence-driven innovation. 
          Our expertise lies in leveraging advanced technologies like machine learning, natural language processing, and predictive 
          analytics to transform your business operations, enhance decision-making, and drive growth.
        
        <h3 style={{paddingTop: '5px'}}>Our Enterprise AI Solutions</h3>
        <ul>
          <li>Data-Driven Insights</li>
          <li>Customer Experience Optimization</li>
          <li>Process Automation</li>
          <li>Intelligent Supply Chain Management</li>
          <li>Fraud Detection and Security</li>
          <li>AI-Enhanced Marketing and Sales</li>
          <li>Healthcare AI Solutions</li>
        </ul>
        </p>
      </div>
    </div>
  );
};

export default EnterpriseAiSolutions;
