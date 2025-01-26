import { Row, Col, Button, Flex, Grid, Carousel } from "antd";

import backgroundHero from "../assets/images/background/background-hero.png";
import backgroundHeroMobile from "../assets/images/background/background-hero-mobile.png";
import taglineNoMobile from "../assets/images/tagline.png";
import taglineMobile from "../assets/images/tagline-mobile.png";
import globe from "../assets/images/background/globe.jpg";


// const CardHero = () => {
//   const { xs } = Grid.useBreakpoint();
//   const tagline = xs ? taglineMobile : taglineNoMobile;
//   const background = globe;

//   return (
//     <Row
//       id="card-hero"
//       className="card-hero"
//       style={{
//         backgroundImage: `url(${background})`,
//         backgroundPosition: "top",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <Col
//         xs={24}
//         sm={{ offset: 1, span: 16 }}
//         md={{ offset: 1, span: 14 }}
//         lg={{ offset: 2, span: 10 }}
//         xl={{ offset: 2, span: 9 }}
//         style={{ padding: "20px" }} // Ensures spacing on small screens
//       >
//         <Flex vertical className="content-hero">
//           <span
//             className="hero-title"
//             style={{
//               color: "yellow",
//               fontSize: xs ? "1.5rem" : "2rem", // Adjust font size for mobile
//               textAlign: "center",
//             }}
//           >
//             Empowering Innovation with Technology
//           </span>
// <h4
//   style={{
//     color: "#f0f8ff", // Light color for better contrast on darker backgrounds
//     fontSize: xs ? "1rem" : "1.5rem", // Responsive font size
//     fontWeight: "500", // Slightly bolder for emphasis
//     textAlign: "center", // Center-align for all screen sizes
//     lineHeight: "1.8", // Spaced-out line height for readability
//     maxWidth: "90%", // Limit width for better readability
//     margin: "0 auto", // Center the text within the container
//     padding: "10px 20px", // Add internal spacing
//     background: "rgba(0, 0, 0, 0.6)", // Semi-transparent background for text emphasis
//     borderRadius: "10px", // Rounded corners for modern look
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
//   }}
// >
// Infyss delivers innovative solutions in Enterprise AI, Chatbots, Web Development, Robotics, Image Processing, and E-commerce, empowering businesses with intelligence-driven technologies
// </h4>

//           <Col
//             span={xs ? 24 : 2} // Adjust button width on mobile
//             style={{ textAlign: "center", marginTop: "15px" }}
//           >
//             <Button
//               size="large"
//               type="primary"
//               href="#join-us"
//               className="content-hero-button"
//             >
//               Join with Us
//             </Button>
//           </Col>
//         </Flex>
//       </Col>
//     </Row>
//   );
// };

// export default CardHero;



const CardHero = () => {
  const { xs } = Grid.useBreakpoint();
  const background = globe;

  const slides = [
    {
      title: "Empowering Innovation with Technology",
      description:
        "Infyss delivers innovative solutions in Enterprise AI, Chatbots, Web Development, Robotics, Image Processing, and E-commerce, empowering businesses with intelligence-driven technologies.",
    },
    {
      title: "Cutting-edge Enterprise AI",
      description:
        "We provide AI-driven tools that optimize business processes, enhance decision-making, and deliver tangible results.",
    },
    {
      title: "Transformative Web Development",
      description:
        "Our web development expertise delivers scalable, responsive, and secure solutions tailored to your needs.",
    },
  ];

  return (
    <Row
      id="card-hero"
      className="card-hero"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Col
        xs={24}
        sm={{ offset: 1, span: 22 }}
        md={{ offset: 2, span: 20 }}
        lg={{ offset: 3, span: 18 }}
        xl={{ offset: 4, span: 16 }}
        style={{
          padding: "20px",
          borderRadius: "15px",
          background: "transparent", // Ensures no background color is applied
          boxShadow: "none", // Removes the shadow effect at the edges
        }}
      >
        <Carousel autoplay dotPosition="bottom">
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="content-hero">
                <span
                  className="hero-title"
                  style={{
                    color: "yellow",
                    fontSize: xs ? "1.5rem" : "2.5rem",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {slide.title}
                </span>
                <h4
                  style={{
                    color: "#f0f8ff",
                    fontSize: xs ? "1rem" : "1.5rem",
                    fontWeight: "500",
                    textAlign: "center",
                    lineHeight: "1.8",
                    maxWidth: "90%",
                    margin: "15px auto",
                    padding: "10px 20px",
                    background: "rgba(0, 0, 0, 0.8)",
                    borderRadius: "10px",
                  }}
                >
                  {slide.description}
                </h4>
                <Col
                  span={xs ? 24 : 8}
                  style={{ textAlign: "center", marginTop: "15px" }}
                >
                  <Button
                    size="large"
                    type="primary"
                    href="#join-us"
                    className="content-hero-button"
                    style={{
                      borderRadius: "8px",
                    }}
                  >
                    Get Started
                  </Button>
                </Col>
              </div>
            </div>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
};

export default CardHero;
