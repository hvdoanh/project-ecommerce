import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/home/slider.css";
import { IoIosStar } from "react-icons/io";
import "../styles/home/product.css";
import { useNavigate } from "react-router-dom";

const ProductMore = ({ setId }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products?limit=${limit}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((erros) => {
        console.log(erros);
      });
  }, [limit]);

  const handleMoreProducts = () => {
    setLimit((prev) => prev + 5);
  };

  const handleProductDetails = (idProduct) => {
    console.log("idProduct", idProduct);
    setId(idProduct);
    navigate(`products/${idProduct}`);
  };

  const handleSortProduct = (e) => {
    const newArr = [...data];
    if (e === "giathap") {
      setData(
        newArr.sort((a, b) => {
          return a.price - b.price;
        })
      );
    } else {
      setData(
        newArr.sort((a, b) => {
          return b.price - a.price;
        })
      );
    }
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <div className="cdt_noram">
        <h1 className="cdt_noram_title">Tất Cả Sản Phẩm </h1>
        <select
          className="cdt_noram_choose_price"
          onChange={(e) => handleSortProduct(e.target.value)}
        >
          <option value="">Giá</option>
          <option value="giathap">Giá thấp</option>
          <option value="giaccao">Giá cao</option>
        </select>
      </div>
      <div
        className="all_product"
        style={{
          marginBottom: "20px",
          flexWrap: "wrap",
          justifyContent: "start",
        }}
      >
        {data.map((product) => {
          return (
            <div
              className="items_product"
              onClick={() => handleProductDetails(product.id)}
              key={product.id}
              style={{ height: "485x", width: "339px" }}
            >
              <div className="vote_star_quantity_icon">
                <div className="vote_star_quantity">
                  <p className="vote_star">
                    {product.rating.rate} <IoIosStar className="star" />
                  </p>
                  <p className="vote_quantity">({product.rating.count})</p>
                </div>
                <span className="icon_new">New</span>
              </div>
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
      </div>
      <button
        className="see_more"
        onClick={handleMoreProducts}
        style={{ display: `${data.length === 20 ? "none" : "block"}` }}
      >
        Xem thêm
      </button>
    </div>
  );
};

export default ProductMore;
