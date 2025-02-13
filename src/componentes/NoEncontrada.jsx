import { useLocation } from "react-router";
import { Link } from "react-router";
import "../estilos/NoEncontrada.css"
function NoEncontrada({ mensaje }) {
  const location = useLocation();

  return (
    <div className="noEncontradaContainer">
    <h1>
      {mensaje
        ? mensaje
        : `La página "${location.pathname}" no existe`}
    </h1>
    <p>
      Verifica tu busqueda o vuelve a la
      <Link to={"/"}> página de inicio</Link>.
    </p>
  </div>
  );
}

export default NoEncontrada;
