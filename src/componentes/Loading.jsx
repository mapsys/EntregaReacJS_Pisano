import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "../estilos/Loading.css";
function Loading({ textoAMostrar }) {
  return (
    <div  className="loadingSpinner">
      <Button bsPrefix="buttonSpinner">
        <Spinner className="sppiner" as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
        <Spinner className="sppiner" as="span" animation="grow"  size="sm" role="status" aria-hidden="true" />
        <Spinner className="sppiner" as="span" animation="grow" size="lg" role="status" aria-hidden="true" />
        {textoAMostrar}
      </Button>
    </div>
  );
}

export default Loading;
