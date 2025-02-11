import { useState } from "react";
import Button from "react-bootstrap/Button";
import "../estilos/ItemCounter.css";
function ItemCounter() {
  const [count, setCount] = useState(0);
  function handlePlus() {
    setCount(count + 1);
  }

  function handleSubs() {
    count > 0 ? setCount(count - 1) : setCount(0);
  }
  return (
    <div className="itemCountContainer">
      <h4>Agregar al carrito</h4>
      <div className="itemCounter">
        <Button variant="outline-info" onClick={handlePlus}>
          +
        </Button>
        <span>{count}</span>
        <Button variant="outline-info" onClick={handleSubs}>
          -
        </Button>
      </div>
    </div>
  );
}

export default ItemCounter;
