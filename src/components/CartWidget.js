import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Badge } from "customizable-react-badges";
import img from "../img/cart.png";

const CartWidget = () => {
  const test = useContext(CartContext);

  /* Widget that counts the elements and leads to the cart. If there are no items then it's invisible*/
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
