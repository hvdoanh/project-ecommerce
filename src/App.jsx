import React, { useState } from "react";
import Bai1 from "./Bai1";
import Bai2 from "./Bai2";
import Login from "./Login";
// import Login from "./Login";

function App() {
  // bai1
  const [name, setName] = useState("doanh");
  const [email, setEmail] = useState("hvd@gmail.com");
  const [img, setImg] = useState(
    "https://hpconnect.vn/wp-content/uploads/2020/02/anh-dep-cau-rong-da-nang-viet-nam-10.jpg"
  );

  const productList = [
    {
      id: 1,
      title: "Sách A",
      desc: "Mô tả sách A",
      gia: 1000000,
      ngay_tao: "2024-01-24",
    },
    {
      id: 2,
      title: "Sách B",
      desc: "Mô tả sách B",
      gia: 1200000,
      ngay_tao: "2024-01-25",
    },
    {
      id: 3,
      title: "Sách C",
      desc: "Mô tả sách C",
      gia: 9000,
      ngay_tao: "2024-01-26",
    },
    {
      id: 4,
      title: "Sách D",
      desc: "Mô tả sách D",
      gia: 90000000,
      ngay_tao: "2024-01-27",
    },
  ];

  return (
    <>
      <h1>Bài 1</h1>
      <Bai1 name={name} email={email} img={img} />

      <h1>Bài 2</h1>

      <Bai2 productList={productList} />

      <h1> Bài3</h1>

      <Login />
    </>
  );
}

export default App;
