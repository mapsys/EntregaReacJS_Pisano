import { useState, useEffect } from "react";
import { getProductQuery, getProductDescription } from "../constants/urls";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import NoEncontrada from "./NoEncontrada";
function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [noEncontrado, setNoEncontrado] = useState(false);

  useEffect(() => {
    const queryProducto = getProductQuery(id);
    const queryDescription = getProductDescription(id);
    setLoading(true);

    Promise.all([
      fetch(queryProducto).then((res) => {
        if (!res.ok) throw new Error("Producto no encontrado");
        return res.json();
      }),
      fetch(queryDescription).then((res) => {
        if (!res.ok) throw new Error("Descripción no encontrada");
        return res.json();
      }),
    ])
      .then(([productData, descriptionData]) => {
        setProducto({ ...productData, description: descriptionData.plain_text });
      })
      .catch((error) => setNoEncontrado(true))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading textoAMostrar={"Cargando Detalles"} />
      ) : noEncontrado ? (
        <NoEncontrada mensaje={`El producto con ID ${id} no existe.`} />
      ) : (
        <ItemDetail producto={producto} />
      )}
    </>
  );
}

export default ItemDetailContainer;
