import React, { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import ProductDetails from "./components/ProductDetails";
import LayoutDisplay from "./components/layout/LayoutDisplay";

function App() {
  const [id, setId] = useState("");

  console.log("id", id);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LayoutDisplay />}>
          <Route path="/" element={<Home setId={setId} />} />
          <Route
            path={`/products/${id}`}
            element={<ProductDetails id={id} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
