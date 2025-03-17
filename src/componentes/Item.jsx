import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "../estilos/Item.css";
import { Link } from "react-router";
function Item({ producto }) {
  return (
    <Col lg={3} md={4} sm={6} className="ItemColumns">
      <Card className="d-flex flex-column ItemCard">
        <Card.Img className="ItemListImage" variant="top" src={producto.thumbnail} alt={producto.title} />
        <Card.Body className="d-flex flex-column flex-grow-1">
          <Card.Title className="text-center cardTitle">{producto.title}</Card.Title>
          <Card.Title className="text-center cardTitle">${producto.price}</Card.Title>
          <Button as ={Link} to={`/producto/${producto.id}`} variant="primary" className="w-100">
            Ver más
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
