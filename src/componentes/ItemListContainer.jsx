import "../estilos/ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
function ItemListContainer({ message }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const queries = {
      Chocolates: "https://api.mercadolibre.com/sites/MLA/search?q=chocolates%20fenix",
      Moldes: "https://api.mercadolibre.com/sites/MLA/search?q=moldes%20nordicware",
      Espátulas: "https://api.mercadolibre.com/sites/MLA/search?q=espatulas%20reposteria",
    };

    Promise.all(
      Object.entries(queries).map(([categoria, url]) =>
        fetch(url)
          .then((response) => response.json())
          .then((data) =>
            data.results.map((producto) => ({
              ...producto,
              categoria, // Agrega la categoría correspondiente
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
