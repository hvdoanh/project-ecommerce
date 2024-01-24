import React, { useState } from "react";

const Bai2 = ({ productList }) => {
  const [sort, setSort] = useState("desc");
  const [products, setProducts] = useState(productList);

  const handleSort = () => {
    const sortProductList = [...products];
    sortProductList.sort((a, b) => {
      if (sort === "asc") {
        return a.gia - b.gia;
      } else {
        return b.gia - a.gia;
      }
    });
    setProducts(sortProductList);
    setSort(sort === "asc" ? "desc" : "asc");
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>mô tả</th>
            <th>giá</th>
            <th>ngày tạo</th>
          </tr>
        </thead>
        {products.map((product, index) => {
          return (
            <tbody key={index}>
              <tr>
                <th>{product.id}</th>
                <th>{product.title}</th>
                <th>{product.desc}</th>
                <th>{product.gia}</th>
                <th>{product.ngay_tao}</th>
              </tr>
            </tbody>
          );
        })}
      </table>
      <button onClick={handleSort}>sort</button>
    </div>
  );
};

export default Bai2;
