import { useState } from "react";
import Button from "react-bootstrap/Button";
import "../estilos/ItemCounter.css";
import { useCart } from "../context/CartContext";
function ItemCounter({ producto }) {
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");
  const { addToCart } = useCart();

  const handlePlus = () => {
    setCount(count + 1);
    setError("");
  };

  const handleSubs = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    if (count - 1 === 0) {
      setError("");
    }
  };

  const handleAddToCart = () => {
    if (count > 0) {
      addToCart(producto, count);
      setError(""); // Borra el mensaje de error si la cantidad es válida
    } else {
      setError("⚠️ Debes agregar al menos un producto."); // Mensaje en rojo si la cantidad es 0
    }
  };
  return (
    <div className="itemCounterContainer">
      {error && <p className="error-message">{error}</p>}
      <div className="itemCountContainer">
        <h4>Agregar al carrito</h4>
        <div className="itemCounter">
          <Button variant="outline-info" onClick={handleSubs}>
            -
          </Button>
          <span>{count}</span>
          <Button variant="outline-info" onClick={handlePlus}>
            +
          </Button>
        </div>
        <Button
          variant="none"
          className="addItemToCart"
          onClick={handleAddToCart}
        >
          Agregar
        </Button>
      </div>
    </div>
  );
}

export default ItemCounter;
