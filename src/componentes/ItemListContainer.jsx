import "../estilos/ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getQuery } from "../constants/urls";
import { useParams } from "react-router";
function ItemListContainer({ message }) {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const queries = getQuery(id);

    console.log(queries);

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
      })
      .catch((error) => console.error("Error al obtener los productos:", error));
  }, [id]);
  return (
    <div>
      <ItemList productos={productos}></ItemList>
    </div>
  );
}
export default ItemListContainer;
