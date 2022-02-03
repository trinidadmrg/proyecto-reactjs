import { useState } from "react";

const ItemCount = () => {
  const [cantidad, setCantidad] = useState(0);

  const increment = () => {
    setCantidad(cantidad + 1);
  };

  const decrecent = () => {
    setCantidad(cantidad - 1);
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
