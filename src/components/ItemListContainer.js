import ItemList from "./ItemList";
import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const { productList } = require("../utils/productList");

export default function ItemListContainer() {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    customFetch(
      1000,
      productList.filter((item) => {
        if (idCategory === undefined) return item;
        return item.category === parseInt(idCategory);
      })
    )
      .then((result) => setDatos(result))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [idCategory]);

  return loading === true ? (
    <p className="loading">Estamos cargando los productos, un momento...</p>
  ) : (
    <ItemList items={datos} />
  );
}
