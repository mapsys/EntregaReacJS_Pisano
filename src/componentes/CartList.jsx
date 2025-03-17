import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CartItem from "./CartItem";
import { Button } from "react-bootstrap";
import "../estilos/CartList.css";
import { useCart } from "../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
function CartList({ carrito }) {
  const { cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const handleClear = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás deshacer esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, vaciar carrito",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire(
          "¡Carrito vaciado!",
          "Tu carrito ha sido vaciado.",
          "success"
        );
      }
    });
  };

  const handleTotal = () => {
    return cartTotal();
  };

  const handleCheckout = () => {
    navigate("/checkout");
  }

  return (
    <Container className="CartListContainer">
      <Row className="g-4 CartListProducts">
        {carrito.map((producto) => (
          <CartItem key={producto.id} producto={producto} />
        ))}
      </Row>
      <div className="cartActions">
        <button variant="none" className="clearCart" onClick={handleClear}>
          Vaciar Carrito
        </button>
        <div className="CartCompra">
          <h3 className="carrito-acciones-total ">Total: ${handleTotal()}</h3>
          <button
            onClick={handleCheckout}
            className="carrito-acciones-comprar"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </Container>
  );
}

export default CartList;
