import "../estilos/CartWidget.css";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router";
function CartWidget() {
  const { cartTotalItems } = useCart();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/cart");
  };
  return (
    <div className="cartWidget position-relative ms-3 me-5">
      <i onClick={handleClick} className="cartWidget bi bi-cart2"></i>
      <span className="cartWidget position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {cartTotalItems()}
        <span className="visually-hidden">artículos en el carrito</span>
      </span>
    </div>
  );
}

export default CartWidget;
