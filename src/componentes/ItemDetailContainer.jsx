import { useState, useEffect } from "react";
import { getProductQuery, getProductDescription } from "../constants/urls";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import NoEncontrada from "./NoEncontrada";
import { getProduct } from "../firebase/dbs";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [noEncontrado, setNoEncontrado] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProduct(id)
      .then((res) => {
        if (res) {
          setProducto(res);
        } else {
          setNoEncontrado(true);
        }
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
