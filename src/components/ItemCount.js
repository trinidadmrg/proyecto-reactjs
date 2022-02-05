import { useState } from "react";

const ItemCount = () => {
  const [cantidad, setCantidad] = useState(0);

  const increment = () => {
    if (cantidad >= 5) {
      alert("Has alcanzado el límite de stock de este producto");
    } else {
      setCantidad(cantidad + 1);
    }
  };

  const decrecent = () => {
    if (cantidad <= 0) {
      alert("No tienes ningún producto en el carrito");
    } else {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="div-item-count">
      <button className="button-item-count" onClick={increment}>
        +
      </button>
      <p className="number-item-count">{cantidad}</p>
      <button className="button-item-count" onClick={decrecent}>
        -
      </button>
    </div>
  );
};

export default ItemCount;
