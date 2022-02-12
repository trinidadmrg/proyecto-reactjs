import ItemList from "./ItemList";
import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const { productList } = require("../utils/productList");

export default function ItemListContainer() {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    customFetch(
      1000,
      productList.filter((item) => {
        if (idCategory === undefined) return item;
        return item.category === parseInt(idCategory);
      })
    )
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, [datos]);

  return <ItemList items={datos} />;
}
