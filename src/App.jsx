import { useState } from "react";
import "./estilos/App.css";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router";
import NoEncontrada from "./componentes/NoEncontrada";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={ <NoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
