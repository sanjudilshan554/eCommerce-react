import React from "react";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/cart" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
