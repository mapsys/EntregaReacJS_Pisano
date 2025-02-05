import '../estilos/ItemListContainer.css'
import { useState, useEffect} from 'react'
import ItemList from './ItemList';  
function ItemListContainer({message}){
const [productos, setProductos] = useState([]);

useEffect(() => {
    const queries = [
      { url: "https://api.mercadolibre.com/sites/MLA/search?q=chocolates%20fenix", categoria: "Chocolates" },
      { url: "https://api.mercadolibre.com/sites/MLA/search?q=moldes%20nordicware", categoria: "Moldes" },
      { url: "https://api.mercadolibre.com/sites/MLA/search?q=espatulas%20reposteria", categoria: "Espátulas" }
    ];

    Promise.all(
      queries.map(query => 
        fetch(query.url)
          .then(response => response.json())
          .then(data => 
            data.results.map(producto => ({
              ...producto, 
              categoria: query.categoria
            }))
          )
      )
    )
    .then(resultados => {
      const allProducts = resultados.flat();
      setProductos(allProducts);
      console.log(allProducts);
    })
    .catch(error => console.error("Error al obtener los productos:", error));
  }, []);
    return (
        <div >
            <ItemList productos={productos}></ItemList>
        </div>

    )
}
export default ItemListContainer