import "../estilos/NavBar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { getCategories } from "../constants/urls";
import { Link } from "react-router";

function NavBar() {
  const categorias = getCategories;
  return (
    <Navbar expand="lg" className="bg-body-tertiary mainHeader">
      <div className="navBarContainer">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto">
              <div className="menuItems">
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
