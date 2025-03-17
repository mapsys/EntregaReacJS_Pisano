import { useState } from "react";
import "./estilos/App.css";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import CartContainer from "./componentes/CartContainer";
import { BrowserRouter, Routes, Route } from "react-router";
import NoEncontrada from "./componentes/NoEncontrada";
import Header from "./componentes/Header";
import { uploadProductsToFirestore } from "./firebase/uploadToFirestore";



function App() {
  const [count, setCount] = useState(0);
  const cargaInicial = false;
  cargaInicial && uploadProductsToFirestore();
  return (
    <BrowserRouter>
      <div className="appContainer">
        <div className="appHeader">
          <Header></Header>
        </div>
        <div className="appCentralPage">
          <div className="categoryBar">
            <NavBar />
          </div>
          <div className="mainContent">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/producto/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="*" element={<NoEncontrada />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
