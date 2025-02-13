import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "../estilos/Loading.css"
function Loading({textoAMostrar} ) {
    return(
  <div className="loadingSpinner">
    <Button variant="primary" disabled className="buttonSpinner">
      <Spinner className="sppiner" as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
      {textoAMostrar}
    </Button>
  </div>
    )
}

export default Loading;
