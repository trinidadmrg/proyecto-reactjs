import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import FormatNumber from "../utils/FormatNumber";

const Cart = () => {
  const test = useContext(CartContext);

  return (
    <div>
      <h1 className="cart-title">Tu Carrito de Compras</h1>
      <div className="cart-options">
        <Link to="/">
          <button className="buymore-button">Continuar comprando</button>
        </Link>
        {test.cartList.length > 0 ? (
          <button className="erase-all" type="filled" onClick={test.removeList}>
            Vaciar carrito
          </button>
        ) : (
          <p className="empty-cart">Tu carrito está vacío</p>
        )}
      </div>
      <div>
        <div>
          <div>
            {test.cartList.length > 0 &&
              test.cartList.map((item) => (
                <div className="cart-products" key={item.idItem}>
                  <div>
                    <img
                      className="cart-picture"
                      src={item.pictureItem}
                      alt="imagen"
                    />
                  </div>
                  <div className="cart-details">
                    <span>
                      <b>Producto:</b> {item.nameItem}
                    </span>
                    <p>{item.qtyItem} unidad(es)</p>
                    <p>
                      <FormatNumber number={item.costItem} /> por unidad
                    </p>
                    <button
                      className="delete-product"
                      type="filled"
                      onClick={() => test.deleteItem(item.idItem)}
                    >
                      Eliminar producto
                    </button>
                  </div>
                </div>
              ))}
          </div>
          {test.cartList.length > 0 && (
            <div className="cart-summary">
              <h2 className="summary">Resúmen de Compra</h2>
              <div>
                <p className="summary-titles">Cantidad de Productos:</p>
                <p className="summary-desc">{test.calcItemsQty()}</p>
              </div>
              <div>
                <p className="summary-titles">Total a Pagar:</p>
                <p className="summary-desc">
                  <FormatNumber number={test.calcTotal()} />
                </p>
              </div>
              <button className="buy-button">Comprar Ahora</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
