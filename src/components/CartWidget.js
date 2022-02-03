import React from "react";
import { Badge } from "customizable-react-badges";
import img from "../img/cart.png";

const CartWidget = () => {
  return (
    <div className="cart-container">
      <Badge
        content={4}
        verticalAlignment="top"
        horizontalAlignment="right"
        bgColor="white"
      >
        <img className="cart-vector" src={img} alt="cart vector" />
      </Badge>
    </div>
  );
};

export default CartWidget;
