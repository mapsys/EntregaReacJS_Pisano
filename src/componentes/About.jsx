import sobreMi from "../assets/SobreMi.png";
import '../estilos/About.css';
function About() {
  return (
    <section class="aboutContent">
      <img src={sobreMi} alt="Imagen del autor de la pagina" />
      <h1>Sobre Mi</h1>
      <p>
        Desde chico, crecí rodeado de sabores y aromas que marcaron mi vida. Los
        domingos eran sagrados: me despertaba con el aroma del tuco burbujeando
        y la mesa llena de ravioles o ñoquis recién hechos por mi abuela. Toda
        mi familia sabía cocinar, y no era casualidad: mis tíos y abuelos
        tuvieron heladerías, panaderías y hasta saladeros de pescado en Mar del
        Plata. En casa, con mi madre, la comida siempre fue casera. Desde pizzas
        recién horneadas hasta frascos de escabeches de berenjenas o calamares
        que ella preparaba con amor. Aun con algunos desafíos culinarios, como
        las "guerras" de mi madre con el bizcochuelo, el amor por la cocina
        siempre estuvo presente. Mi pasión por la cocina despertó en mi
        adolescencia, aunque tomé un rumbo diferente y estudié Ingeniería en
        Sistemas, logrando el título de Licenciado en Sistemas. A pesar de
        dedicarme a la tecnología, la cocina seguía siendo mi refugio. A los 35
        años decidí formalizar esta pasión y estudié la carrera de cocina en el
        IAG, donde descubrí que la repostería es lo que más disfruto. Hoy, sigo
        descubriendo nuevos sabores y probando recetas. Además, estoy cursando
        la carrera de programador fullstack, donde combino mis dos grandes
        pasiones: la cocina y la tecnología. ¡Bienvenidos a mi espacio donde el
        código y las recetas se mezclan para crear algo delicioso!
      </p>
    </section>
  );
}

export default About;
