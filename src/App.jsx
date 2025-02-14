import { useState } from "react";
import "./estilos/App.css";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router";
import NoEncontrada from "./componentes/NoEncontrada";
import Header from "./componentes/Header";
function App() {
  const [count, setCount] = useState(0);

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
              <Route path="*" element={<NoEncontrada />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
