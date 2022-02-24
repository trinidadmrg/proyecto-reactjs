import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Badge } from "customizable-react-badges";
import img from "../img/cart.png";

const CartWidget = () => {
  const test = useContext(CartContext);

  return (
    <div className="cart-container">
      {test.cartList.length > 0 ? (
        <Badge
          content={test.calcItemsQty()}
          verticalAlignment="top"
          horizontalAlignment="right"
          bgColor="white"
        >
          <img className="cart-vector" src={img} alt="cart vector" />
        </Badge>
      ) : null}
    </div>
  );
};

export default CartWidget;
