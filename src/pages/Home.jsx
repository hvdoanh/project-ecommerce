import React from "react";
import Header from "../components/Home/Header";
import { Titlle } from "../components/Home/Titlle";
import { Product } from "../components/Home/Product";
import SliderMain from "../components/Home/Slider";
import "../pages/home.css";
import ColectionCategories from "../components/Home/ColectionCategories";
import Form from "../components/Home/Form";
import Footer from "../components/Home/Footer";
import Banner from "../components/Home/Banner";

const Home = () => {
  return (
    <div className="home_container">
      <Header />
      <SliderMain />
      <ColectionCategories />
      <Banner />
      <Product />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
