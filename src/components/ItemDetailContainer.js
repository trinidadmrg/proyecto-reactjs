import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { productList } from "../utils/productList";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [dato, setDato] = useState([]);
  const [loading, setLoading] = useState(false);
  const { idItem } = useParams();

  useEffect(() => {
    setLoading(true);
    customFetch(
      1000,
      productList.find((item) => item.id === parseInt(idItem))
    )
      .then((result) => setDato(result))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [dato]);

  return loading === true ? (
    <p className="loading">Estamos cargando los productos, un momento...</p>
  ) : (
    <ItemDetail item={dato} />
  );
};

export default ItemDetailContainer;
