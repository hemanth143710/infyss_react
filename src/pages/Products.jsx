import React from "react";
import ChatBotApi from "../components/ChatBotApi";
import ImagetoVideo from "../components/ImagetoVideo";
import Category from "../components/Category";
import '../assets/styles/products.css'

const Products = () => {
  return (
    <div className="main-section" id="product-section">
      <Category category="Products" />
      <ChatBotApi />
      <ImagetoVideo />
    </div>
  );
};

export default Products;
