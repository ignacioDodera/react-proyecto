import Navbar from "./components/layout/Navbar"
import React from "react";
import { useState } from "react";
import ItemListContainer from "./components/pages/ItemListContainer";


const App = () =>{
 
   const [mensaje, setmensaje] = useState("Mensaje");

  return (
    <div>
      <Navbar />

      <ItemListContainer mensaje = {mensaje} />
    </div>
  
   
  )
}

export default App
