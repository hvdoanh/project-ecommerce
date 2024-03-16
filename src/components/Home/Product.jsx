import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../styles/home/product.css";

export const Product = () => {
  const [data, setData] = useState();

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
    <div className="all_product">
      {data &&
        data.map((product) => {
          return (
            <div className="items_product" key={product.id}>
              <div className="img_product">
                <img src={product.image} alt="icon" />
              </div>
              <div className="product_content">
                <h1 className="name_product">{product.title}</h1>
                <p className="product_desc">{product.description}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};
