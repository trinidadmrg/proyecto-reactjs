import { useEffect, useState } from "react";
import { productList, getList } from "../productList";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [dato, setDato] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    try {
      const info = await getList(productList[1], 2000);
      setDato(info);
    } catch (e) {}
    setLoading(false);
  }, []);

  return loading === true ? (
    <p className="loading">Estamos cargando los productos, un momento...</p>
  ) : (
    <ItemDetail item={dato} />
  );
};

export default ItemDetailContainer;
