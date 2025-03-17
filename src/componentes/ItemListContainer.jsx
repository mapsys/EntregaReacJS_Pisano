import "../estilos/ItemListContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";
import Loading from "./Loading";
import { getCategoryQuery } from "../constants/urls";
import { getProducts } from "../firebase/dbs";

function ItemListContainer({ }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const loadingText = id ? `Cargando ${id}....` : "Cargando productos.....";

  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      try {
        const queries = getCategoryQuery(id);

        const resultados = await Promise.all(
          queries.map(async (query) => {
            const response = await fetch(query.url);
            const data = await response.json();
            return data.results.map((producto) => ({
              ...producto,
              categoria: query.categoria,
            }));
          })
        );

        setProductos(resultados.flat());
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [id]);

  return( 

    <div>{loading ? <Loading textoAMostrar={loadingText} /> : <ItemList productos={productos} />}</div>
  
  ); 

}

export default ItemListContainer;
