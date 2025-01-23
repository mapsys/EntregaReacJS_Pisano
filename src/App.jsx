import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'
import ItemListContainer from './ItemListContainer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ItemListContainer message={"Proximamente......Encontraras los productos que podremos proveerte"}/>
    </>
  )
}

export default App
