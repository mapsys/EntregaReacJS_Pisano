import "../estilos/CartItem.css";
import { useCart } from "../context/CartContext";
function CartItem({ producto }) {
    const { removeFromCart } = useCart();
  const shortDesc = (description) => {
    if (description.length > 50) {
      return description.slice(0, 50) + "...";
    } else {
      return description;
    }
  };
  const handleDelete = () => {
    removeFromCart(producto);
  }

  return (
    <div className="carritoProducto">
      <img src={producto.thumbnail} alt={producto.title} />
      <div className="carrito-producto-titulo">
        <small>Nombre</small>
        <h3>{shortDesc(producto.title)}</h3>
      </div>
      <div className="carrito-producto-cantidad">
        <small>Cantidad</small>
        <p>{producto.quantity}</p>
      </div>
      <div className="carrito-producto-precio">
        <small>Precio Unitario</small>
        <p>${producto.price}</p>
      </div>
      <div className="carrito-producto-subtotal">
        <small>Subtotal</small>
        <p>{producto.quantity * producto.price}</p>
      </div>
      <button
        onClick={handleDelete}
        className="carrito-producto-eliminar"
        id="${producto.id}"
      >
        <i className="bi bi-trash-fill"></i>
      </button>
    </div>
  );
}

export default CartItem;
