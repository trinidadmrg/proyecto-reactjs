import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

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
        {test.cartList.length > 0 ? (
          test.cartList.map((item) => (
            <div className="cart-products" key={item.idItem}>
              <div>
                <img src={item.pictureItem} alt="imagen" />
              </div>
              <div className="cart-details">
                <span>
                  <b>Producto:</b> {item.nameItem}
                </span>
                <p>{item.qtyItem} unidad(es)</p>
                <p>{item.costItem} por unidad</p>
                <button
                  className="delete-product"
                  type="filled"
                  onClick={() => test.deleteItem(item.idItem)}
                >
                  Eliminar producto
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="empty-cart">
            Agrega productos a tu carrito para realizar una compra
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
