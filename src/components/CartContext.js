import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  /* It adds the product to the cart*/
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

  /* To erase the list*/
  const removeList = () => {
    setCartList([]);
  };

  /* To delete a producto of the cart*/
  const deleteItem = (id) => {
    let result = cartList.filter((item) => item.idItem !== id);
    setCartList(result);
  };

  /* To calculate the total per item*/
  const calcTotalPerItem = (idItem) => {
    let index = cartList.map((item) => item.idItem).indexOf(idItem);
    return cartList[index].costItem * cartList[index].qtyItem;
  };

  /* To calculate total and subtotal*/
  const calcSubTotal = () => {
    let totalPerItem = cartList.map((item) => calcTotalPerItem(item.idItem));
    return totalPerItem.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  };
  const calcTotal = () => {
    return calcSubTotal();
  };

  /* To calculate the quantity*/
  const calcItemsQty = () => {
    let qtys = cartList.map((item) => item.qtyItem);
    return qtys.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeList,
        deleteItem,
        calcTotalPerItem,
        calcSubTotal,
        calcTotal,
        calcItemsQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
