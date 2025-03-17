import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../estilos/CheckOutForm.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../firebase/dbs";
import { useNavigate } from "react-router";

function CheckOutForm() {
  const { cart, cartTotal, clearCart } = useContext(cartContext);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const name = e.target.name.value;   
    const phone = e.target.phone.value;
    const order = {
      items: cart,
      user: { fullName: name, phone, email },
      total: cartTotal(),
      time: serverTimestamp(),
    };

    const orderId = await createOrder(order);
    if (orderId === -1) {
      MySwal.fire({
        title: <p> {name} Hubo un error al procesar tu compra</p>,
        icon: "error",
        confirmButtonText: "Cerrar",
      }).then(() => navigate("/cart"));
      return;
    }
    clearCart();
    MySwal.fire({
      title: <p> {name} Tu Compra fue realizada con éxito</p>,
      text: `El ID de tu compra es ${orderId}`,
      icon: "success",
      confirmButtonText: "Cerrar",
    }).then(() => navigate("/"));
  };
  return (
    <div className="checkoutContainer">
        <h2>Ingresa tus datos para poder finalizar la compra</h2>
      <Form className="w-25 checkOutForm" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="5491156545345" required />
        </Form.Group>

        <Button variant="dark" type="submit" className="w-100">
          Finalizar compra
        </Button>
      </Form>
    </div>
  );
}

export default CheckOutForm;
