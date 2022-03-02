import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function ItemListContainer() {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const firestoreFetch = async () => {
      const querySnapshot = await getDocs(collection(db, "items"));
      return querySnapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
    };
    firestoreFetch()
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
