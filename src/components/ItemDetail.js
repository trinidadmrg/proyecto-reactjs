import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);

  const onAdd = (qty) => {
    alert("You have selected " + qty + " items.");
    setItemCount(qty);
  };

  return (
    <>
      {item && item.picture ? (
        <div className="details-container">
          <img className="details-image" src={item.picture} alt="imagen" />
          <div className="details-texts">
            <p className="details-title">{item.title}</p>
            <p className="details-description">{item.description}</p>
            <p className="details-price">{item.price}</p>
            {itemCount === 0 ? (
              <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
            ) : (
              <Link to="/cart">
                <button className="cart-button">Continuar al Carrito</button>
              </Link>
            )}
          </div>
        </div>
      ) : (
        <p className="loading">Estamos cargando los productos, un momento...</p>
      )}
    </>
  );
};

export default ItemDetail;
/* 
import Item from "./Item";
import ItemCount from "./ItemCount";

function onAdd(count) {
  alert(count);
}

const ItemDetail = ({ item }) => {
  return (
    <div className="details-container">
      <img className="details-image" src={item.picture} alt="imagen" />
      <div className="details-texts">
        <p className="details-title">{item.title}</p>
        <p className="details-description">{item.description}</p>
        <p className="details-price">{item.price}</p>
        <ItemCount stock={5} initial={0} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
 */
