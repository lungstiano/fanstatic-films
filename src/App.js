import React from "react";
import { useEffect } from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Navigation from "./components/Navigation/Navigation"
import Films from "./components/Films/Films";


function App() {
  return (

    <>
    <Navigation />
    <Films/>
    
    </>
       
  );
}

export default App;
