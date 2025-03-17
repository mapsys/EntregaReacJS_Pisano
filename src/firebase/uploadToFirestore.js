// src/utils/uploadToFirestore.js
import {
  getCategoryQuery,
  getProductQuery,
  getProductDescription,
} from "../constants/urls";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export const uploadProductsToFirestore = async () => {
  const categorias = getCategoryQuery();
  for (const categoria of categorias) {
    try {
      const response = await fetch(categoria.url);
      const { results } = await response.json();

      for (const producto of results) {
        try {
           // Obtener detalles del producto
           const productDetailResponse = await fetch(getProductQuery(producto.id));
           if (!productDetailResponse.ok) {
             console.warn(`Producto no encontrado (ID: ${producto.id}), descartando.`);
             continue;  // Saltar este producto si falla la búsqueda
           }
           const productDetail = await productDetailResponse.json();
 
           // Obtener descripción del producto
           const productDescriptionResponse = await fetch(getProductDescription(producto.id));
           if (!productDescriptionResponse.ok) {
             console.warn(`Descripción no encontrada para el producto (ID: ${producto.id}), descartando.`);
             continue;  // Saltar si la descripción no existe
           }
           const productDescription = await productDescriptionResponse.json();

          const newProduct = {
            title: productDetail.title,
            thumbnail: productDetail.thumbnail,
            price: productDetail.price,
            pictures: productDetail.pictures.map((pic) => pic.url),
            description: productDescription.plain_text.substring(0, 500),
            category: categoria.categoria,
            productRef: producto.id,
          };
          // Agregar a Firestore
          await addDoc(collection(db, "productos"), newProduct);
          console.log(`Producto subido: ${newProduct.title}`);
        } catch (error) {
          console.error(`Error al procesar el producto ${producto.id}:`, error);
        }
      }
    } catch (error) {
      console.error(
        `Error al obtener la categoría ${categoria.categoria}:`,
        error
      );
    }
  }
  

  console.log("Subida de productos completada.");
};
