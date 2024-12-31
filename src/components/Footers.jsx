import { Col, ConfigProvider, Divider, Row, Space, Typography } from "antd";
import { Footer } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
const { Text } = Typography;
import "../assets/styles/footer.css";

const Footers = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "#fff",
          colorPrimary: "#2e40b6",
          motionDurationSlow: "1s",
        },
        components: {
          Typography: {
            colorLink: "white",
            colorLinkHover: "#2e40b6",
          },
        },
      }}
    >
      <Footer style={{ backgroundColor: "#2e40b6" }}>
        <Row gutter={[0, 30]}>
          <Col
            xs={{
              span: 22,
              offset: 1,
            }}
            sm={{
              span: 22,
              offset: 1,
            }}
            md={{
              span: 12,
              offset: 2,
            }}
            lg={{
              span: 14,
              offset: 2,
            }}
            xl={{
              span: 14,
              offset: 2,
            }}
          >
            <Space>
              <a
                className="links"
                href="https://www.linkedin.com/in/infyss-solutions-a00283190?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoLinkedin size={26} />
              </a>
              <a
                className="links"
                href="https://www.instagram.com/infyss_solutions?igsh=MTFueWlmbjRyNHhyMw=="
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoInstagram size={26} />
              </a>
            </Space>
          </Col>
          <Col
            xs={{
              span: 22,
              offset: 1,
            }}
            sm={{
              span: 22,
              offset: 1,
            }}
            md={{
              span: 8,
            }}
            lg={{
              span: 6,
            }}
            xl={{
              span: 6,
            }}
          >
            <Space direction="vertical">
            <ScrollLink to="card-why-us" duration={500} offset={-80}>
                About
              </ScrollLink>
              <ScrollLink to="solution-section" duration={500} offset={-99}>
                Solutions
              </ScrollLink>
              <ScrollLink to="product-section"  duration={500} offset={-99}>
                Products
              </ScrollLink>
            </Space>
          </Col>
          <Col
            xs={{
              span: 22,
              offset: 1,
            }}
            sm={{
              span: 22,
              offset: 1,
            }}
            md={{
              span: 12,
              offset: 2,
            }}
            lg={{
              span: 14,
              offset: 2,
            }}
            xl={{
              span: 14,
              offset: 2,
            }}
          >
            <Space direction="vertical">
              <Title level={5}>
                <span className="lokasi-title">Infyss</span>
              </Title>
              <Text className="lokasi-detail">
                Menara Standard Chartered Lt. 18
                <br />
                Jl. Prof Dr. Satrio No. 164
                <br />
                Jakarta Selatan 12930
              </Text>
            </Space>
          </Col>
          <Col
            xs={{
              span: 15,
              offset: 1,
            }}
            sm={{
              span: 10,
              offset: 1,
            }}
            md={{
              span: 7,
            }}
            lg={{
              span: 6,
            }}
            xl={{
              span: 5,
            }}
          >
            <Space className="card-kontak" direction="vertical">
              <Title level={5}>
                <span className="title-kontak">Chat Support</span>
              </Title>
              <a
                className="detail-kontak"
                href="https://api.whatsapp.com/send/?phone=62811145377&text=Halo%20NITRO%2C%20saya%20memerlukan%20bantuan"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp size={22} />
                <span>WA +62 811-145-377</span>
              </a>
            </Space>
          </Col>
          <Col
            xs={{
              span: 22,
              offset: 1,
            }}
            sm={{
              span: 20,
              offset: 1,
            }}
            md={{
              span: 16,
              offset: 2,
            }}
            lg={{
              span: 14,
              offset: 2,
            }}
            xl={{
              span: 14,
              offset: 2,
            }}
          >
            <Space direction="vertical" size={"small"}>
              <Space size={"large"}>
                <Title level={5}>
                  <span className="term-condition-title">
                    Terms and Conditions
                  </span>
                </Title>
                <Divider className="batas-putih" />
                <Title level={5}>
                  <span className="term-condition-title">Privacy Policy</span>
                </Title>
              </Space>

              <Text className="term-condition-content">
                <b>Disclaimer : </b>All content on this website is for
                informational purposes only. Infyss does not guarantee its
                completeness or accuracy. Infyss is not responsible for any
                direct or indirect losses resulting from the use of the
                information available on this website.
              </Text>
              <Text className="term-condition-content">
                <b>Privacy Policy : </b>Infyss requires personal information
                from those registering for internal purposes. Infyss and its
                employees are committed to maintaining the confidentiality of
                this information and will not disclose it to third parties.
                However, if required by law, Infyss may provide the information
                to public authorities.
              </Text>
            </Space>
          </Col>
        </Row>
      </Footer>
    </ConfigProvider>
  );
};

export default Footers;
