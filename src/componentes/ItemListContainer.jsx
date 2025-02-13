import "../estilos/ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getCategoryQuery } from "../constants/urls";
import { useParams } from "react-router";
import Loading from "./Loading";
function ItemListContainer({ message }) {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const loadingText = id? `Cargando ${id}....` : "Cargando productos....."
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
      })
      .catch((error) => console.error("Error al obtener los productos:", error))
      .finally(() => setLoading(false));
  }, [id]);
  return (
    <div>
      {loading? <Loading textoAMostrar={loadingText}></Loading> :<ItemList productos={productos}></ItemList>}
    </div>
  );
}
export default ItemListContainer;
