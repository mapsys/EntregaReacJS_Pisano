import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import styles from "./Item.module.css";
import { Link } from "react-router";
function Item({ producto }) {
  return (
    <Col lg={3} md={4} sm={6} >
      <Card className={`${styles.ItemCard} d-flex flex-column`}>
        <Card.Img className={styles.ItemListImage} variant="top" src={producto.thumbnail} alt={producto.title} />
        <Card.Body className="d-flex flex-column flex-grow-1">
          <Card.Title className={`${styles.cardTitle} text-center`} >{producto.title}</Card.Title>
          {/* <Card.Title className={`${styles.cardTitle} text-center`}>{producto.id}</Card.Title> */}
          <Button as ={Link} to={`/producto/${producto.id}`} variant="primary" className="w-100">
            Ver más
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
