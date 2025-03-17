import "../estilos/ItemListContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";
import Loading from "./Loading";
import { getProducts, getProductosByCategory } from "../firebase/dbs";

function ItemListContainer({}) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const loadingText = id ? `Cargando ${id}....` : "Cargando productos.....";

  useEffect(() => {
    setLoading(true);
    const fetchProductos = async () => {
      try {
        let res;
        if (id) {
          res = await getProductosByCategory(id);
        } else {
          res = await getProducts();
        }
        setProductos(res);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loading textoAMostrar={loadingText} />
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
}

export default ItemListContainer;
