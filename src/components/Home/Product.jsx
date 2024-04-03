import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../styles/home/product.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/home/slider.css";
import { IoIosStar } from "react-icons/io";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  // autoplay: true,
  // speed: 2000,
  // autoplaySpeed: 2000,
  // cssEase: "linear",
  arrows: false,
  // initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
      },
    },
  ],
};

export const Product = () => {
  const [data, setData] = useState([]);
  AOS.init();

  console.log(data);
  useEffect(() => {
    const urlApi = axios.get("https://fakestoreapi.com/products");
    urlApi
      .then((reponsive) => {
        setData(reponsive.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div style={{ marginBottom: "30px" }} data-aos="fade-up-right">
        <h1 className="title">Mua 1 Tặng 1</h1>
        <div className="all_product">
          <Slider {...settings}>
            {data &&
              data.map((product) => {
                return (
                  <div className="items_product" key={product.id}>
                    <div className="img_product">
                      <img src={product.image} alt="icon" />
                    </div>
                    <div className="product_content">
                      <h1 className="name_product">{product.title}</h1>
                      <p className="product_desc">Giá: {product.price}$</p>
                    </div>
                    <div className="vote">
                      <p className="vote_star">
                        {product.rating.rate} <IoIosStar className="star" />
                      </p>
                      <p className="quantity">({product.rating.count})</p>
                    </div>
                    <span className="icon_new">New</span>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
      <div style={{ marginBottom: "30px" }} data-aos="fade-down-right">
        <h1 className="title">Mua 1 Tặng 1</h1>
        <div className="all_product">
          <Slider {...settings}>
            {data &&
              data.map((product) => {
                return (
                  <div className="items_product" key={product.id}>
                    <div className="img_product">
                      <img src={product.image} alt="icon" />
                    </div>
                    <div className="product_content">
                      <h1 className="name_product">{product.title}</h1>
                      <p className="product_desc">Giá: {product.price}$</p>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
      <div style={{ marginBottom: "30px" }} data-aos="flip-down">
        <h1 className="title">Mua 1 Tặng 1</h1>
        <div className="all_product">
          <Slider {...settings}>
            {data &&
              data.map((product) => {
                return (
                  <div className="items_product" key={product.id}>
                    <div className="img_product">
                      <img src={product.image} alt="icon" />
                    </div>
                    <div className="product_content">
                      <h1 className="name_product">{product.title}</h1>
                      <p className="product_desc">Giá: {product.price}$</p>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
      <div style={{ marginBottom: "30px" }} data-aos="flip-up">
        <h1 className="title">Mua 1 Tặng 1</h1>
        <div className="all_product">
          <Slider {...settings}>
            {data &&
              data.map((product) => {
                return (
                  <div className="items_product" key={product.id}>
                    <div className="img_product">
                      <img src={product.image} alt="icon" />
                    </div>
                    <div className="product_content">
                      <h1 className="name_product">{product.title}</h1>
                      <p className="product_desc">Giá: {product.price}$</p>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </>
  );
};
