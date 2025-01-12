import { Layout } from "antd";
import Ecommerce from "../components/Ecommerce";
import "../assets/styles/solution.css";
import Webdevelopment from "../components/Webdevelopment";
import Robotics from "../components/Robotics";
import Category from "../components/Category";
import EnterpriseAiSolutions from "../components/EnterpriseAiSolutions";

const Solution = () => {
  return (
    <Layout>
      <div className="main-section" id="solution-section">
        <Category category='Solutions'/>
        <Robotics />
        <Ecommerce />
        <Webdevelopment />
        <EnterpriseAiSolutions />
      </div>
    </Layout>
  );
};

export default Solution;
