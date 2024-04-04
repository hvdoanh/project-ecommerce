import React from "react";
import Header from "../components/Home/Header";
import SliderMain from "../components/Home/Slider";
import "../pages/home.css";
import ColectionCategories from "../components/Home/ColectionCategories";
import Form from "../components/Home/Form";
import Footer from "../components/Home/Footer";
import Banner from "../components/Home/Banner";
import { ProductClothes } from "../components/Home/ProductClothes";
import { ProductJewelry } from "../components/Home/ProductJewelry";
import anh2 from "../assets/images/anh2.jpg";

const Home = () => {
  return (
    <div className="home_container">
      <Header />
      <SliderMain />
      <ColectionCategories />
      <Banner />
      <ProductClothes />
      <Banner src={anh2} />
      <ProductJewelry />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
