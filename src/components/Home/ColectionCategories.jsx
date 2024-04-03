import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "../../styles/home/colectionCategories.css";
import Slider from "react-slick";
import "../../styles/home/product.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const API = "https://fakestoreapi.com/products/categories";
const ApiProduct = "https://fakestoreapi.com/products/category";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} next`}
      style={{ ...style, background: "#c1bcbc80" }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} prev`}
      style={{ ...style, background: "#c1bcbc80" }}
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
}

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        infinite: true,
      },
    },
  ],
};

function ColectionCategories() {
  const [specific, setSpecific] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    const ApiSpecific = axios.get(API);
    ApiSpecific.then((data) => {
      setSpecific(data.data);
    });
    ApiSpecific.catch((error) => {
      console.log(error.data);
    });
  }, []);

  useEffect(() => {
    const handleGetProducts = axios.get(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    handleGetProducts.then((data) => {
      setDataProduct(data.data);
    });
  }, []);

  const handleChangData = (param) => {
    const newParam = param.split(" ").join("%20");
    const handleGetProducts = axios.get(`${ApiProduct}/${newParam}`);

    handleGetProducts.then((data) => {
      setDataProduct(data.data);
    });
    handleGetProducts.catch((error) => {
      console.log(error.data);
    });
  };

  return (
    <div className="categories">
      <div className="all-button">
        {specific.map((item, index) => {
          return (
            <div className="reappear" key={index}>
              <button onClick={() => handleChangData(item)}>{item}</button>
            </div>
          );
        })}
      </div>
      <div className="all-products">
        <Slider {...settings}>
          {dataProduct.map((product) => {
            return (
              <div className="items_product" key={product.id}>
                <div className="img_product">
                  <img src={product.image} alt="icon" />
                </div>
                <div className="product_content">
                  <h1 className="name_product">{product.title}</h1>
                  <p className="product_desc">Giá : {product.price}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default ColectionCategories;
