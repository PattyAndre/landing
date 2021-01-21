import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.price.amount * curr.count,
    0
  );

  const totalItems = cart.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <div className="col-4">
      <div className="content-cart">
        <h3>Kosarica</h3>
        <div className="content-product">
          {cart.map((item, index) => (
            <div key={index} className="content-product-item">
              <div>
                <div>
                  <img src={item.image} alt="cart-product" width="80" />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label>
                    {item.count}x {item.name}
                  </label>
                  <label>S/. {item.price.amount}</label>
                </div>
              </div>
              <div className="remove">X</div>
            </div>
          ))}
        </div>
        <div>
          <h3>Items: {totalItems}</h3>
        </div>
        <div>
          <h4>Total : S/. {Math.round(totalPrice * 100) / 100}</h4>
        </div>
      </div>
    </div>
  );
};
