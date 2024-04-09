import React from "react";
import SliderMain from "../components/Home/Slider";
import "../pages/home.css";
import ColectionCategories from "../components/Home/ColectionCategories";
import Form from "../components/Home/Form";
import Banner from "../components/Home/Banner";
import { ProductClothes } from "../components/Home/ProductClothes";
import { ProductJewelry } from "../components/Home/ProductJewelry";
import anh2 from "../assets/images/anh2.jpg";
import ProductMore from "../components/ProductMore";

const Home = ({ setId }) => {
  return (
    <div className="home_container">
      <SliderMain />
      <ColectionCategories />
      <Banner />
      <ProductClothes setId={setId} />
      <Banner src={anh2} />
      <ProductJewelry />
      <Banner src={anh2} />
      <ProductMore setId={setId} />
      <Form />
    </div>
  );
};

export default Home;
