import { useState } from "react";
import "./estilos/App.css";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="*" element={ <div><h1>La pagina buscada no existe</h1></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
