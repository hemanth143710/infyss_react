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
          At Infyss, we provide a powerful Image to Video conversion solution that transforms static images into dynamic, engaging videos.
          Our technology ensures smooth transitions, customizable effects, and high-quality output, making it perfect for content creators,
          businesses, and marketers. Whether you need to create promotional videos, slideshows, or animations, our solution delivers
          seamless performance with ease of use. Unlock the full potential of your visuals with our innovative and reliable Image to Video Converter.
        </p>
      </div>
    </div>
  );
};

export default ImagetoVideo;
