import Carousel from "react-bootstrap/Carousel";
import "../estilos/ItemDetail.css";
import ItemCounter from "./ItemCounter";

function ItemDetail({ producto }) {
  return (
    <div className="itemDetailContainer">
      <h2>{producto.title}</h2>
      <div className="detailCarrousel">
        <Carousel interval={null}>
          {producto.pictures.map((imagen) => (
            <Carousel.Item key={imagen.id} className="detailCarrouselItem">
              <img className="" src={imagen.url} alt="First slide" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="detailDescripcion">{producto.description}</div>
      <div className="addItemToCart">
        <ItemCounter producto = {producto}></ItemCounter>
      </div>
    </div>
  );
}

export default ItemDetail;
