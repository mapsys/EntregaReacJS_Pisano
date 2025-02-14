import "../estilos/CartWidget.css";

function CartWidget() {
  return (
    <div className="position-relative ms-3 me-5">
      <i className="bi bi-cart2"></i>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        5<span className="visually-hidden">artículos en el carrito</span>
      </span>
    </div>
  );
}

export default CartWidget;
