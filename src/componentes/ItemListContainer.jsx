import "../estilos/ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import categorias from "../constants/categorias";

function ItemListContainer({ message }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const queries = Object.entries(categorias).map(([categoria, url]) => ({
      categoria,
      url,
    }));
    
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
        console.log(allProducts);
      })
    .catch((error) => console.error("Error al obtener los productos:", error));
  }, []);
  return (
    <div>
      <ItemList productos={productos}></ItemList>
    </div>
  );
}
export default ItemListContainer;
