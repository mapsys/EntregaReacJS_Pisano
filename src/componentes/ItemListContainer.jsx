import "../estilos/ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getCategoryQuery } from "../constants/urls";
import { useParams } from "react-router";
function ItemListContainer({ message }) {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const queries = getCategoryQuery(id);
    setLoading(true);

    Promise.all(
      queries.map((query) =>
        fetch(query.url)
          .then((response) => response.json())
          .then((data) =>
            data.results.map((producto) => ({
              ...producto,
              categoria: query.categoria,
            }))
          )
      )
    )
      .then((resultados) => {
        const allProducts = resultados.flat();
        setProductos(allProducts);
        console.log(productos);
      })
      .catch((error) => console.error("Error al obtener los productos:", error))
      .finally(() => setLoading(false));
  }, [id]);
  return (
    <div>
      {loading? <h1>CARGANDO......</h1>: <ItemList productos={productos}></ItemList>}
    </div>
  );
}
export default ItemListContainer;
