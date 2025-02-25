import React from "react";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import { store } from "./App/Store";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cart" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
