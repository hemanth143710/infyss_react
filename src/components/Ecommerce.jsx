import React from "react";
import bgImage from "../assets/images/ecommercebg.jpg"; // Import image
import "../assets/styles/ecommerce.css";

const Ecommerce = () => {
  return (
    <div
      className="ecommerce-section"
      style={{
        backgroundImage: `url(${bgImage})`, // Inline style for dynamic URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="ecommerce-section-right">
        <h1>E-commerce</h1>
        <p>
          At Infyss, we provide a powerful Image to Video conversion solution that transforms static images into dynamic, engaging videos.
          Our technology ensures smooth transitions, customizable effects, and high-quality output, making it perfect for content creators,
          businesses, and marketers. Whether you need to create promotional videos, slideshows, or animations, our solution delivers
          seamless performance with ease of use. Unlock the full potential of your visuals with our innovative and reliable Image to Video Converter.
        </p>
      </div>
    </div>
  );
};

export default Ecommerce;

