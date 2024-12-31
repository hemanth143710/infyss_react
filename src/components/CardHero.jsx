import { Button, Col, Flex, Grid, Row } from "antd";
import backgroundHero from "../assets/images/background/background-hero.png";
import backgroundHeroMobile from "../assets/images/background/background-hero-mobile.png";
import taglineNoMobile from "../assets/images/tagline.png";
import taglineMobile from "../assets/images/tagline-mobile.png";

const CardHero = () => {
  const { xs } = Grid.useBreakpoint();
  const tagline = xs ? taglineMobile : taglineNoMobile;
  const background = xs ? backgroundHeroMobile : backgroundHero;

  return (
    <Row  id="card-hero" className="card-hero" style={{ backgroundImage: `url(${background})`, backgroundPosition: "top", backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>
      <Col xs={16} sm={{ offset: 1, span: 16 }} md={{ offset: 1, span: 14 }} lg={{ offset: 2, span: 10 }} xl={{ offset: 2, span: 9 }}>
        <Flex vertical className="content-hero">
          <span className="hero-title">Empowering Innovation with Technology</span>
          <p>Infyss delivers cutting-edge solutions in Chatbot APIs, Web Development, Robotics, Image Processing, and E-commerce to take your business to the next level.</p>
          <Col span={2}>
            <Button size="large" type="primary" href="#join-us" className="content-hero-button">
              join with us
            </Button>
          </Col>
        </Flex>
      </Col>
    </Row>
  );
};

export default CardHero;
