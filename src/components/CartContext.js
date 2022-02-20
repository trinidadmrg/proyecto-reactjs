import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, qty) => {
    let found = cartList.find((product) => product.idItem === item.id);
    if (found === undefined) {
      setCartList([
        ...cartList,
        {
          idItem: item.id,
          pictureItem: item.picture,
          nameItem: item.title,
          costItem: item.price,
          qtyItem: qty,
        },
      ]);
    } else {
      found.qtyItem += qty;
    }
  };

  const removeList = () => {
    setCartList([]);
  };

  const deleteItem = (id) => {
    let result = cartList.filter((item) => item.idItem != id);
    setCartList(result);
  };

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, removeList, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
