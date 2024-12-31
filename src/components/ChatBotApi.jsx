import React, { useEffect }  from "react";
import chatbot from "../assets/images/chatbot.png";
import '../assets/styles/chatbot.css'
// import { Col, Grid, Row, Space } from "antd";
// const { useBreakpoint } = Grid;

const ChatBotApi = () => {
  // const { xs, sm, md } = useBreakpoint();

  useEffect(() => {
    const handleScroll = () => {
      const image = document.querySelector('.chatbot-section-right img');
      const position = image.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight - 100) {
        image.classList.add('show'); // Add class to trigger animation
      } else {
        image.classList.remove('show'); // Remove class when out of view
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);
  return (

        // <div className="chatbot-section">
        //   {(!xs && !sm && !md) || (xs && !md) || (sm && !md) ? (
        //     <Row gutter={[0, { sm: 30 }]}>
        //       <Col sm={{ offset: 1, span: 22 }} xs={22}>
        //         <h1>Chat Bot API</h1>
        //       </Col>
        //       <Col xs={{ offset: 2, span: 18 }} sm={{ offset: 2, span: 18 }}>
        //         <img src={chatbot} alt="E-commerce illustration" className="chatbot-section-right"></img>
        //       </Col>
        //       <Col xs={{ offset: 1, span: 20 }} sm={{ offset: 1, span: 20 }} className="content-why-us">
        //         <Space direction="vertical" size={"middle"}>
        //         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde amet, enim et alias ex ut, atque quae cum placeat soluta. Optio praesentium tenetur eos mollitia impedit hic cum labore.</p>
        //         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, blanditiis.</p>
        //         </Space>
        //       </Col>
        //     </Row>
        //   ) : (
        //     <Row align={"middle"}>
        //       <Col md={{ offset: 1, span: 11 }} lg={{ offset: 2, span: 12 }} xl={{ offset: 2, span: 12 }}>
        //         <Space direction="vertical" size={"middle"}>
        //           <h1>Chat Bot API</h1>
        //           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minima error fuga commodi ipsam! Incidunt libero alias officia saepe repudiandae perferendis id, sint, eum velit provident optio, in suscipit molestias!.</p>
        //           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, porro.</p>
        //         </Space>
        //       </Col>
        //       <Col md={10} lg={8} xl={8}>
        //         <img src={chatbot} alt="E-commerce illustration" className="chatbot-section-right" style={{ float: 'left', width: '100%' }} />
        //       </Col>
        //     </Row>
        //   )}
        // </div>


    <div className="chatbot-section">
      <div className="chatbot-section-left">
        <h1>Chat Bot API</h1>
        <p>
          Our advanced Chatbot API is designed to seamlessly integrate with your
          applications, providing 24/7 automated assistance. Whether it's
          handling customer queries, providing product recommendations, or
          automating workflows, our API ensures a smooth conversational
          experience. 
        </p>
        <p><b>Features:</b> Natural Language Processing (NLP),
          Multi-Language Support, Easy Integration.
        </p> 
        <p><b>Benefits:</b> Boost efficiency,
          enhance user satisfaction, and reduce operational costs. Infyss
          Chatbot API is your gateway to smart, automated interactions that
          drive business success.
        </p>
      </div>
      <div className="chatbot-section-right">
        <img src={chatbot} alt="E-commerce illustration"></img>
      </div>
    </div>
  );
};

export default ChatBotApi;
