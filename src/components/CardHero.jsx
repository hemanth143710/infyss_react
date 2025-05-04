import { Row, Col, Button, Grid, Carousel } from "antd";
import globe from "../assets/images/background/globe.jpg";

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
        backgroundImage: `linear-gradient(rgba(13, 12, 12, 0.5), rgba(13, 0, 0, 0.5)), url(${background})`,
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
                    maxWidth: xs ? "100%": "90%",
                    margin: "15px auto",
                    padding: "10px 20px",
                    background: "rgba(0, 0, 0, 0.8)",
                    borderRadius: "10px",
                  }}
                >
                  {slide.description}
                </h4>
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
              </div>
            </div>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
};

export default CardHero;
