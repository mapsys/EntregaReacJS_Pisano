import { useState, useEffect } from "react";
import { getProductQuery, getProductDescription } from "../constants/urls";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryProducto = getProductQuery(id);
    const queryDescription = getProductDescription(id);
    setLoading(true);

    Promise.all([fetch(queryProducto).then((res) => res.json()), fetch(queryDescription).then((res) => res.json())])
    .then(([productData, descriptionData]) => {
        setProducto({ ...productData, description: descriptionData.plain_text });
      })      
      .catch((error) => console.error("Error al obtener los datos:", error))
      .finally(() => setLoading(false));
  }, [id]);


  return (
    <>
      {loading? <h1>CARGANDO.....</h1>: <ItemDetail producto = {producto}></ItemDetail>}
    </>
  );
}

export default ItemDetailContainer;
