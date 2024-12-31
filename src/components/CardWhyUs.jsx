import { Col, Grid, Row, Space } from "antd";
import ilustrasiWhyUs from "../assets/images/whyus.png";
const { useBreakpoint } = Grid;

const CardWhyUs = () => {
  const { xs, sm, md } = useBreakpoint();

  return (
    <div className="card-why-us">
      {(!xs && !sm && !md) || (xs && !md) || (sm && !md) ? (
        <Row gutter={[0, { sm: 30 }]}>
          <Col sm={{ offset: 1, span: 22 }} xs={22}>
            <h1>WHY US</h1>
          </Col>
          <Col xs={{ offset: 2, span: 18 }} sm={{ offset: 2, span: 18 }}>
            <img src={ilustrasiWhyUs} className="ilustrasi-why-us" />
          </Col>
          <Col xs={{ offset: 1, span: 20 }} sm={{ offset: 1, span: 20 }} className="content-why-us">
            <Space direction="vertical" size={"middle"}>
            <p>Our team of experts leverages cutting-edge technology to deliver customized, scalable, and secure solutions tailored to your business needs. With a proven track record of success, we focus on empowering businesses to achieve their goals efficiently. Our agile methodology ensures fast development and adaptability to changing requirements.</p>
            <p> We prioritize customer satisfaction through a collaborative approach and provide 24/7 support to ensure seamless operations. At Infyss, we are committed to driving growth and innovation for your business with reliable, future-ready solutions.</p>
            </Space>
          </Col>
        </Row>
      ) : (
        <Row align={"middle"}>
          <Col md={{ offset: 1, span: 11 }} lg={{ offset: 2, span: 12 }} xl={{ offset: 2, span: 12 }}>
            <Space direction="vertical" size={"middle"}>
              <h1>WHY US</h1>
              <p>Our team of experts leverages cutting-edge technology to deliver customized, scalable, and secure solutions tailored to your business needs. With a proven track record of success, we focus on empowering businesses to achieve their goals efficiently. Our agile methodology ensures fast development and adaptability to changing requirements.</p>
              <p> We prioritize customer satisfaction through a collaborative approach and provide 24/7 support to ensure seamless operations. At Infyss, we are committed to driving growth and innovation for your business with reliable, future-ready solutions.</p>
            </Space>
          </Col>
          <Col md={10} lg={8} xl={8}>
            <img src={ilustrasiWhyUs} className="ilustrasi-why-us" style={{ float: 'left', width: '100%' }} />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default CardWhyUs;

