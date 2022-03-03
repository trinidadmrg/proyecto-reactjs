import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { firestoreFetchOne } from "../utils/firestoreFetch";

const ItemDetailContainer = () => {
  const [dato, setDato] = useState([]);
  const [loading, setLoading] = useState(false);
  const { idItem } = useParams();

  useEffect(() => {
    setLoading(true);

    firestoreFetchOne(idItem)
      .then((result) => setDato(result))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [idItem]);

  return loading === true ? (
    <p className="loading">Estamos cargando los productos, un momento...</p>
  ) : (
    <ItemDetail item={dato} />
  );
};

export default ItemDetailContainer;
