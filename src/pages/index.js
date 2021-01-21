import React, { Component } from "react";
import "./style.css";
import { ProductList } from "./ProductList";
import { Cart } from "./Cart";
import { CartProvider } from "./CartContext";

const Main = () => {
  return (
    <CartProvider>
      <div className="row">
        <Cart />
        <ProductList />
      </div>
    </CartProvider>
  );
};

export default Main;
