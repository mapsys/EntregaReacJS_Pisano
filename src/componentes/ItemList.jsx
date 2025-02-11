import "../estilos/ItemList.css";
import Item from "./Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
function ItemList({ productos }) {
  return (
    <Container className="ItemListContainer">
      <Row className="g-4">
        {productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </Row>
    </Container>
  );
}
export default ItemList;
