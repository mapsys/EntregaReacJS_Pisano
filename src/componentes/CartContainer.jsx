import { useCart } from "../context/CartContext";
import CartList from "./CartList";
import EmptyCart from "./EmptyCart";

function CartContainer() {
  const { cart } = useCart();

  return (
    <div>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <CartList carrito={cart} />
      )}
    </div>
  );
}

export default CartContainer;
