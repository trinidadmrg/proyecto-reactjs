import { useEffect, useState } from "react";
import { productList, getList } from "../productList";
import Item from "./Item";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(async () => {
    try {
      const data = await getList(productList, 2000);
      console.log(data);
      setItems(data);
    } catch (e) {}
  }, []);

  return items.map((item, index) => (
    <Item
      key={index}
      title={item.title}
      price={item.price}
      picture={item.picture}
    />
  ));
}
