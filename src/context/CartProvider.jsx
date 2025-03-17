import { cartContext } from "./CartContext";
import { useState, useEffect } from "react";
function CartProvider({ children }) {
  // Cargo el carrito desde el stogare si lo hay
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(storedCart);

  // Guardo en localStorage cada vez que cambie el carrito
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, qty) => {
    setCart((prevCart) => {
      if (prevCart.some((item) => item.id === product.id)) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: qty }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const cartTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };
  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartTotalItems,
        cartTotal,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;
