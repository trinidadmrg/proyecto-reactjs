import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import FormatNumber from "../utils/FormatNumber";

/* Firebase Imports*/

import {
  collection,
  doc,
  setDoc,
  serverTimestamp,
  updateDoc,
  increment,
} from "firebase/firestore";
import db from "../utils/firebaseConfig";

const Cart = () => {
  const test = useContext(CartContext);

  const createOrder = () => {
    const itemsForDB = test.cartList.map((item) => ({
      id: item.idItem,
      title: item.nameItem,
      price: item.costItem,
    }));

    test.cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.idItem);
      await updateDoc(itemRef, {
        stock: increment(-item.qtyItem),
      });
    });

    let order = {
      buyer: {
        name: "Nombre Apellido",
        email: "nombreusuario@correomail.com",
        phone: "1100000000",
      },
      total: test.calcTotal(),
      items: itemsForDB,
      date: serverTimestamp(),
    };

    console.log(order);

    /* It creaters the order */

    const newFirestoreOrder = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };

    newFirestoreOrder()
      .then((result) =>
        alert(
          "Hemos creado tu pedido. A continuación podrás visualizar tu número de transacción.\n\n\nOrder ID: " +
            result.id +
            "\n\n"
        )
      )
      .catch((err) => console.log(err));

    test.removeList();
  };
  /* It returns the cart if it's empty or if it has products*/
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
              <button className="buy-button" onClick={createOrder}>
                Comprar Ahora
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
