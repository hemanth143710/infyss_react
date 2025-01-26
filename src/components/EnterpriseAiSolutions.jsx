import React from 'react'
import bgImage from "../assets/images/enterpriseai.jpg"; // Import image
import '../assets/styles/robotics.css';

// const EnterpriseAiSolutions = () => {
//   return (
//         <div
//           className="robotics-section"
//           style={{
//             backgroundImage: `url(${bgImage})`, // Inline style for dynamic URL
//           }}
//         >
//           <div className="robotics-section-right">
//             <h1>Enterprise AI Solutions</h1>
//             <p>At Infyss, we provide cutting-edge Enterprise AI solutions tailored to empower businesses with intelligence-driven innovation. Our expertise lies in leveraging advanced technologies like machine learning, natural language processing, and predictive analytics to transform your business operations, enhance decision-making, and drive growth.

//             <h3>Our Enterprise AI Solutions</h3>
//             <p>1.Data-Driven Insights</p>

//             {/* <p>Transform raw data into actionable insights with AI-powered analytics.</p> */}
//             {/* Gain real-time visibility into operations, customer behavior, and market trends. */}
//             <p>2.Customer Experience Optimization</p>
//             {/* <p>Implement AI-driven chatbots and virtual assistants to deliver seamless 24/7 customer support.</p> */}
//             {/* Personalize customer interactions with advanced recommendation systems. */}
//             <p>3.Process Automation</p>
//             {/* <p>Automate repetitive and time-consuming tasks using AI-integrated Robotic Process Automation (RPA).</p> */}
//             {/* Optimize workflows and resource management to increase productivity. */}
//             <p>4.Intelligent Supply Chain Management</p>
//             {/* <p>Leverage AI for demand forecasting, inventory optimization, and logistics automation.</p> */}
//             {/* Reduce costs and improve efficiency with data-driven supply chain insights. */}
//             <p>5.Fraud Detection and Security</p>
//             {/* <p>Protect your business with AI-powered anomaly detection and predictive threat analysis.</p> */}
//             {/* Strengthen cybersecurity and safeguard critical assets. */}
//             <p>6.AI-Enhanced Marketing and Sales</p>
//             {/* <p>Use predictive analytics to identify high-value leads and optimize sales strategies.</p> */}
//             {/* Implement AI for automated campaigns and customer segmentation. */}
//             <p>7.Healthcare AI Solutions</p>
//             {/* <p>Revolutionize patient care with AI-enabled diagnostics and treatment recommendations.</p> */}
//             {/* Streamline operations with AI-powered healthcare management systems. */}
//             </p>
//                       </div>
//                     </div>
//               )
//             }

// export default EnterpriseAiSolutions

const EnterpriseAiSolutions = () => {
  return (
    <div
      className="robotics-section"
      style={{
        backgroundImage: `url(${bgImage})`, // Inline style for dynamic URL
        backgroundSize: "cover", // Ensure the background covers the container
        backgroundRepeat: "no-repeat", // Prevent repetition
        backgroundPosition: "center", // Center the background image
        overflow: "hidden", // Remove scrollbars
        height: "100vh", // Make sure it fits the viewport height
        width: "100%", // Full width of the container
      }}
    >
      <div
        className="robotics-section-right"
        style={{
          overflow: "hidden", // Prevent child content from overflowing
        }}
      >
        <h1>Enterprise AI Solutions</h1>
        <p>
          At Infyss, we provide cutting-edge Enterprise AI solutions tailored to empower businesses with intelligence-driven innovation. 
          Our expertise lies in leveraging advanced technologies like machine learning, natural language processing, and predictive 
          analytics to transform your business operations, enhance decision-making, and drive growth.
        </p>

        <h3>Our Enterprise AI Solutions</h3>
        <ul>
          <li>1. Data-Driven Insights</li>
          <li>2. Customer Experience Optimization</li>
          <li>3. Process Automation</li>
          <li>4. Intelligent Supply Chain Management</li>
          <li>5. Fraud Detection and Security</li>
          <li>6. AI-Enhanced Marketing and Sales</li>
          <li>7. Healthcare AI Solutions</li>
        </ul>
      </div>
    </div>
  );
};

export default EnterpriseAiSolutions;
