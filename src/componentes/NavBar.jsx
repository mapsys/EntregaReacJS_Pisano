import "../estilos/NavBar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { getCategories } from "../constants/urls";
import { Link } from "react-router";

function NavBar() {
  const categorias = getCategories;
  return (
    <Navbar expand="lg" className="navBarHeader">
      <div className="navBarContainer">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto menuItems">
              <div className="navBarTitulo">
                <h3>Nuestras Categorias</h3>
                </div>
                <div className="navBarLinks">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                {categorias.map((categoria, index) => (
                  <Nav.Link key={index} as={Link} to={`/category/${categoria}`}>
                    {categoria}
                  </Nav.Link>
                ))}
                </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </div>
    </Navbar>
  );
}

export default NavBar;
