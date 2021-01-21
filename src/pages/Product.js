import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export const Product = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = (product) => {
    setCart((currentState) => {
      const currentCart = [...currentState];

      const isProductInCart = currentCart.some((p) => p.id === product.id);

      if (!isProductInCart) {
        const newProduct = { ...product, count: 1 };

        return [...currentCart, newProduct];
      } else {
        const newCurrentCart = currentCart.map((item) => {
          if (item.id === product.id) {
            item.count += 0.5;
          }

          return item;
        });
        return [...newCurrentCart];
      }
    });
  };

  return (
    <>
      <div className="card">
        <img className="img-product" src={props.product.image} alt="Product img" />
        <h3>{props.product.name}</h3>
        <h4>S/. {props.product.price.amount}</h4>
        <button onClick={() => addToCart(props.product)} className="button">
          Add to cart
        </button>
      </div>
    </>
  );
};
