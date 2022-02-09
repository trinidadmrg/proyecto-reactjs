import { useEffect, useState } from "react";
import { productList, getList } from "../productList";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    try {
      const data = await getList(productList, 2000);
      setItems(data);
    } catch (e) {}
    setLoading(false);
  }, []);

  return loading === true ? <p>Cargando</p> : <ItemList lista={items} />;
}
