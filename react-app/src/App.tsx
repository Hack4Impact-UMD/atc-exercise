import React from "react";
import "./App.css";
import Home from "./Home"
import Pokimon from "./Pokimon"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>     
        <Route path = "/Pokimon" element = {<Pokimon/>}/>                                                                                                                                                                                                                                              "
      </Routes>
    </BrowserRouter>
  );
}

export default App;
