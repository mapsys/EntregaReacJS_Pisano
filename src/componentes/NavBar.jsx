import "../estilos/NavBar.css";
import CartWidget from "../componentes/CartWidget";
function NavBar() {
  return (
    <>
      <header className="mainHeader">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid navigationBar">
            <div className="logo">
              <img src="src/assets/pngegg.png" alt="Logo" />
              <a className="navbar-brand" href="#">
                Nuestra Cocina
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse menuItems" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Chocolates
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Aromatizantes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Espatulas
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Moldes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Espesantes
                  </a>
                </li>
              </ul>
            </div>
            <CartWidget />
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
