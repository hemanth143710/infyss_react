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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
          fugit dolores placeat, eius animi alias, neque voluptate, corrupti
          labore ducimus officiis repudiandae saepe autem nostrum in facere
          molestias? Unde dolores inventore cumque, id nesciunt nemo quidem
          sequi ex vero corrupti?
        </p>
      </div>
    </div>
  );
};

export default Ecommerce;

