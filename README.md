# eCommerce - MyKitchen

Este proyecto es un eCommerce de materias primas y elementos de cocina (como chocolates, aromatizantes, espátulas y moldes) que complementa la página principal: [mykitchen.com.ar](http://www.mykitchen.com.ar/).

## Tecnologías Utilizadas
- [React](https://react.dev/) - Librería para construir interfaces de usuario.
- [Vite](https://vitejs.dev/) - Herramienta de desarrollo y construcción rápida.
- [Bootstrap](https://getbootstrap.com/) - Framework CSS para diseño responsivo.
- [React Bootstrap](https://react-bootstrap.netlify.app/) - Componentes de Bootstrap adaptados a React.
- [React Router](https://reactrouter.com/) - Manejo de rutas en la aplicación.
- [Firebase](https://firebase.google.com/) - Base de datos en tiempo real y backend.
- [SweetAlert2](https://sweetalert2.github.io/) - Ventanas modales personalizadas.
- [SweetAlert2 React Content](https://github.com/sweetalert2/sweetalert2-react-content) - Integración de SweetAlert2 con React.

## Estructura de Componentes

- **ItemListContainer, ItemList, Item:** Muestran los productos disponibles para la compra.
- **ItemDetailContainer, ItemDetail:** Muestran los detalles de cada producto. Utilizan el componente `Counter` para agregar la cantidad seleccionada al carrito.
- **CartContainer, CartList, CartItem:** Se encargan de mostrar los detalles del carrito.
- **CartWidget:** Muestra el icono del carrito con la cantidad total de ítems.
- **EmptyCart:** Informa cuando el carrito está vacío.
- **NoEncontrada:** Informa cuando no se encuentra una página o producto.
- **Header:** Contiene el logo de la empresa, un enlace a la página principal y una página "Sobre mí".

## Contexto

El proyecto utiliza un contexto `CartContext` que proporciona las siguientes funciones:
- `addToCart`: Agrega productos al carrito.
- `removeFromCart`: Elimina un producto del carrito.
- `clearCart`: Vacía el carrito por completo.
- `cartTotalItems`: Calcula la cantidad total de ítems en el carrito.
- `cartTotal`: Calcula el costo total de los productos en el carrito.
- El contexto también mantiene el estado del carrito en el `localStorage`.

## Interacción con Firebase

Se implementan las siguientes funciones para la interacción con Firebase:
- `getProducts`: Obtiene todos los productos.
- `getProductsByCategory`: Obtiene productos filtrados por categoría.
- `getProduct`: Obtiene un producto específico.
- `createOrder`: Crea una orden de compra.

## Instalación y Ejecución
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/mapsys/EntregaReacJS_Pisano.git
   cd mykitchen-ecommerce
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```
3. Ejecutar el proyecto:
   ```bash
   npm run dev
   ```

## Autor
**Mariano Pisano** - [MyKitchen](http://www.mykitchen.com.ar/)

---

¡Gracias por visitar mi proyecto! 🍫🥄