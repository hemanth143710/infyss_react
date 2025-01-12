import { Button, Col, Flex, Grid, Row } from "antd";
import backgroundHero from "../assets/images/background/background-hero.png";
import backgroundHeroMobile from "../assets/images/background/background-hero-mobile.png";
import taglineNoMobile from "../assets/images/tagline.png";
import taglineMobile from "../assets/images/tagline-mobile.png";
import globe from "../assets/images/background/globe.jpg";


const CardHero = () => {
  const { xs } = Grid.useBreakpoint();
  const tagline = xs ? taglineMobile : taglineNoMobile;
  const background = globe;

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
        sm={{ offset: 1, span: 16 }}
        md={{ offset: 1, span: 14 }}
        lg={{ offset: 2, span: 10 }}
        xl={{ offset: 2, span: 9 }}
        style={{ padding: "20px" }} // Ensures spacing on small screens
      >
        <Flex vertical className="content-hero">
          <span
            className="hero-title"
            style={{
              color: "yellow",
              fontSize: xs ? "1.5rem" : "2rem", // Adjust font size for mobile
              textAlign: "center",
            }}
          >
            Empowering Innovation with Technology
          </span>
          <h4
            style={{
              color: "white",
              fontSize: xs ? "1rem" : "1.25rem", // Adjust font size for mobile
              textAlign: "center",
              lineHeight: "1.5", // Improve readability
              maxWidth: xs ? "90%" : "100%", // Restrict width on mobile
              margin: "0 auto", // Center text on mobile
            }}
          >
            Infyss delivers cutting-edge solutions in Chatbot APIs, Web Development, Robotics, Image Processing, and E-commerce to take your business to the next level.
          </h4>
          <Col
            span={xs ? 24 : 2} // Adjust button width on mobile
            style={{ textAlign: "center", marginTop: "15px" }}
          >
            <Button
              size="large"
              type="primary"
              href="#join-us"
              className="content-hero-button"
            >
              Join with Us
            </Button>
          </Col>
        </Flex>
      </Col>
    </Row>
  );
};

export default CardHero;
