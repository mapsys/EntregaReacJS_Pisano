import '../estilos/EmptyCart.css';
import { Link } from "react-router";
function EmptyCart() {
    return (
        <div className="emptyCartContainer">
            <h2>El carrito esta vacio</h2>
            <h3>Sigue <Link to={'/'}>comprando</Link></h3>
        </div>
    );
}

export default EmptyCart;