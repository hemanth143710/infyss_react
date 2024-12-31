import React from "react";
import imagetovideo from "../assets/images/imagetovideo.jpg";
import imagetovideo2 from "../assets/images/imagetovideo2.jpg";
import "../assets/styles/imagetovideo.css";

const ImagetoVideo = () => {
  return (
    <div className="imagetovideo-section">
      <div className="imagetovideo-section-right">
        {/* Carousel */}
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2000" // Slide every 2 seconds
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img
                src={imagetovideo}
                className="d-block w-100"
                alt="Image to video illustration 1"
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={imagetovideo2}
                className="d-block w-100"
                alt="Image to video illustration 2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="imagetovideo-section-left">
        <h1>Image to Video Converter</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
          fugit dolores placeat, eius animi alias, neque voluptate, corrupti
          labore ducimus officiis repudiandae saepe autem nostrum in facere
          molestias? Unde dolores inventore cumque, id nesciunt nemo quidem
          sequi ex vero 
        </p>
      </div>
    </div>
  );
};

export default ImagetoVideo;
