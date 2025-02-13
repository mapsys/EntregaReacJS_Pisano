import "../estilos/NavBar.css";
import CartWidget from "../componentes/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { getCategories } from "../constants/urls";
import { Link } from "react-router";
import logo from "../assets/pngegg.png"
function NavBar() {
  const categorias = getCategories;
  return (
    <Navbar expand="lg" className="bg-body-tertiary mainHeader">
      <Container>
        <Navbar.Brand href="/" className="logo">
          <img alt="logo" src={logo} className="d-inline-block align-top" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav menuItems">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {categorias.map((categoria, index) => (
              <Nav.Link key={index} as={Link} to={`/category/${categoria}`}>{categoria}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
  );
}


export default NavBar;
