import "../estilos/Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/pngegg.png";
import { Link } from "react-router";
import CartWidget from "../componentes/CartWidget";

function Header() {

  return (
    <Navbar className="headerHeader">
      <Container>
        <Navbar.Brand as={Link} to="/" className="logoHeader">
          <img alt="logo" src={logo} className="d-inline-block align-top" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              Nosotros
            </Nav.Link>
            <Nav.Link href="http://www.mykitchen.com.ar" target="_blank">
              Nuestras recetas
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
