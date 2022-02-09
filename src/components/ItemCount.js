import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity >= stock) {
      alert("Has alcanzado el límite de stock de este producto");
    } else {
      setQuantity(quantity + 1);
      onAdd(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity <= initial) {
      alert("No tienes ningún producto en el carrito");
    } else {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="div-item-count">
      <button className="button-item-count" onClick={increment}>
        +
      </button>
      <p className="number-item-count">{quantity}</p>
      <button className="button-item-count" onClick={decrement}>
        -
      </button>
    </div>
  );
};

export default ItemCount;
