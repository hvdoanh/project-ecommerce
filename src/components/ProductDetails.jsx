/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/productDetails.css";
import { FiShoppingCart } from "react-icons/fi";

function ProductDetails({ id }) {
  console.log("iddetails", id);

  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((erros) => {
        console.log(erros);
      });
  }, []);

  return (
    <div className="container_medium">
      <div className="product_image">
        <img src={data?.image} alt="img_product" />
      </div>
      <div className="product_single__summary">
        <div className="product-single__sticky">
          <h1 className="product_title">{data?.title}</h1>
          <span className="product_price">Giá :{data?.price}$</span>
          <form action="" className="form_product_detalis">
            <div className="option_select_size">
              <span className="checkmark">M</span>
              <span className="checkmark">L</span>
              <span className="checkmark">XL</span>
              <span className="checkmark">2XL</span>
              <span className="checkmark">3XL</span>
            </div>
            <div className="product_single_button">
              <a href="#" className="btn">
                <FiShoppingCart />
                Chọn kích thước
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
