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
          At Infyss, we specialize in providing cutting-edge e-commerce solutions tailored to meet your business needs. 
          Our expertise empowers businesses to create seamless online shopping experiences with features like user-friendly
          interfaces, secure payment integrations, and robust backend systems. Whether you're starting fresh or upgrading your
          existing platform, Infyss ensures a solution that is innovative, reliable, and scalable. Let us help you transform 
          your e-commerce vision into reality with solutions that truly deliver.
        </p>
      </div>
    </div>
  );
};

export default Ecommerce;

