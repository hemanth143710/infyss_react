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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates debitis saepe beatae architecto error fuga eius, animi, accusantium, quos cupiditate ut! Odit delectus, similique repudiandae ducimus ad molestiae provident, a, reprehenderit quas deleniti magnam voluptatibus? Veritatis voluptate eos repellendus omnis, molestiae aspernatur reprehenderit voluptas eaque nesciunt, sunt explicabo excepturi incidunt illo, deleniti asperiores. Impedit fugiat ipsa dignissimos est! Sapiente, voluptatum delectus blanditiis tempora vero expedita nostrum illo ea porro veritatis officia fugit error architecto ullam at numquam in. Eaque velit odio ea deserunt ipsum voluptatibus. Ullam molestias nihil consequatur nulla? Perferendis provident sit maxime ipsa quisquam modi mollitia voluptas doloremque!
        </p>
      </div>
    </div>
  )
}

export default Robotics
