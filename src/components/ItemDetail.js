import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import FormatNumber from "../utils/FormatNumber";

const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);

  const onAdd = (qty) => {
    alert("You have selected " + qty + " items.");
    setItemCount(qty);
    test.addToCart(item, qty);
  };

  /* It gives you the detail of the item */

  return (
    <>
      {item && item.picture ? (
        <div className="details-container">
          <img className="details-image" src={item.picture} alt="imagen" />
          <div className="details-texts">
            <p className="details-title">{item.title}</p>
            <p className="details-description">{item.description}</p>

            <p className="details-price">
              <FormatNumber number={item.price} />{" "}
            </p>
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
