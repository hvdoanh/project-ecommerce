import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/home/slider.css";
import { IoIosStar } from "react-icons/io";
import "../../styles/home/product.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

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
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export const ProductClothes = () => {
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
    <div style={{ marginBottom: "30px" }} data-aos="fade-up-right">
      <h1 className="title">Sản Phẩm Quần Áo</h1>
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
  );
};
