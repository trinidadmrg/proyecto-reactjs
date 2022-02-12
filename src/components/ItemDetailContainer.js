import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { productList, getList } from "../utils/productList";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [dato, setDato] = useState([]);
  /*   const [loading, setLoading] = useState(false);
   */ const { idItem } = useParams();

  useEffect(() => {
    customFetch(
      2000,
      productList.find((item) => item.id === parseInt(idItem))
    )
      .then((result) => setDato(result))
      .catch((err) => console.log(err));
  }, []);

  return <ItemDetail item={dato} />;
};

export default ItemDetailContainer;
