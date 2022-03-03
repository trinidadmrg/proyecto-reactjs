import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../utils/firestoreFetch";

export default function ItemListContainer() {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    firestoreFetch(parseInt(idCategory))
      .then((result) => {
        setDatos(result);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [idCategory]);

  return loading === true ? (
    <p className="loading">Estamos cargando los productos, un momento...</p>
  ) : (
    <ItemList items={datos} />
  );
}
