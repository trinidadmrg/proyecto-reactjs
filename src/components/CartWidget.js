import React from "react";
import { Badge } from "customizable-react-badges";

const CartWidget = () => {
  return (
    <div className="cart-container">
      <Badge
        content={4}
        verticalAlignment="top"
        horizontalAlignment="right"
        bgColor="green"
      >
        <img
          className="cart-vector"
          src="https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964_960_720.png"
          alt="cart vector"
        />
      </Badge>
    </div>
  );
};

export default CartWidget;
