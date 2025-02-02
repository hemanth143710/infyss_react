import { Button, Col, Drawer, Flex, Grid, Menu, Row } from "antd";
import { Header } from "antd/es/layout/layout";
// import logoNitroboost from "../assets/images/logo-nitroboost.png";
import logoNitroboost from "../assets/images/Infyss-logo.png";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
const { useBreakpoint } = Grid;
import "../assets/styles/header.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const itemsMenu = [
  {
    key: "",
    label: (
      <ScrollLink to="card-hero" duration={500} offset={-100}>
        Home
      </ScrollLink>
    ),
  },
  {
    key: "products",
    label: (
      <ScrollLink to="product-section" duration={500} offset={-95}>
        Products
      </ScrollLink>
    ),
  },
  {
    key: "solution",
    label: (
      <ScrollLink to="solution-section" duration={500} offset={-95}>
        Solution
      </ScrollLink>
    ),
  },
  {
    key: "join-us",
    label: (
      <div className="card-menu-item-daftar">
        <ScrollLink
          to="join-us"
          className="menu-item-daftar"
          duration={500}
          offset={-90}
        >
          Contact Us
        </ScrollLink>
      </div>
    ),
  },
];

const Headers = () => {
  const { xs, sm, md } = useBreakpoint();

  const onClickMenu = (e) => {
    setOpen(false);
  };

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Header className="headers">
      <Row align={"middle"}>
        <Col
          className="card-logo"
          xs={{ offset: 1, span: 16 }}
          sm={{ offset: 1, span: 10 }}
          md={{ offset: 1, span: 10 }}
          lg={{ offset: 2, span: 12 }}
          xl={{ offset: 2, span: 14 }}
        >
          <img
            src={logoNitroboost}
            alt="logo-nitroboost"
            onClick={() => onClickMenu(null)}
          />
        </Col>
        <Col xs={4} sm={12} md={6} lg={6} xl={4}>
          {(xs && !md) || (sm && !md) || (!xs && !sm && !md) ? (
            <LuMenu
              className="icon-hamburger-menu"
              size={22}
              onClick={showDrawer}
            />
          ) : (
            <Menu
              className="list-menu"
              mode="horizontal"
              onClick={(e) => onClickMenu(e.key)}
              items={itemsMenu}
            />
          )}
        </Col>
      </Row>

      <Drawer
        styles={{
          header: {
            border: "0px",
          },
        }}
        placement={"top"}
        size="large"
        width={"100vw"}
        height={"100vh"}
        onClose={onClose}
        closable={false}
        open={open}
      >
        <Flex vertical align="center" gap={10} className="drawer-content">
          <Row gutter={[0, 20]} className="drawer-content-menu">
            <Col
              xs={{ span: 24 }}
              sm={{ offset: 1, span: 22 }}
              className="drawer-menu-close"
            >
              <IoClose size={26} onClick={onClose} />
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ offset: 1, span: 22 }}
              className="drawer-menu"
            >
              <ScrollLink
                to="card-hero"
                duration={500}
                offset={-100}
                onClick={onClose}
              >
                Home
              </ScrollLink>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ offset: 1, span: 22 }}
              className="drawer-menu"
            >
              <ScrollLink
                to="product-section"
                duration={500}
                offset={-95}
                onClick={onClose}
              >
                Products
              </ScrollLink>{" "}
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ offset: 1, span: 22 }}
              className="drawer-menu"
            >
              <ScrollLink
                to="solution-section"
                duration={500}
                offset={-95}
                onClick={onClose}
              >
                Solutions
              </ScrollLink>
            </Col>
            <Col span={20} offset={2}>
              <ScrollLink
                to="join-us"  // ID of the target section
                smooth={true}
                duration={500}
                offset={-90}
                onClick={onClose}  // Close drawer after clicking
              >
                <Button className="button-menu-item" type="primary" size="middle">
                  Contact us
                </Button>
              </ScrollLink>
            </Col>

          </Row>
          <Row className="drawer-content-disclaimer">
            <Col
              xs={{ span: 24 }}
              sm={{ offset: 1, span: 22 }}
              className="disclaimer-card"
            >
              <p>
                <strong>Disclaimer</strong>
              </p>
              <p>
              The success of any portfolio or trading strategy depends on various factors, including market conditions,
              risk management, and financial planning. Individual results may vary based on personal understanding,
              decision-making, and psychological resilience in trading. It is important to conduct thorough research 
              and exercise caution when making financial decisions.
              </p>
            </Col>
          </Row>
        </Flex>
      </Drawer>
    </Header>
  );
};

export default Headers;
