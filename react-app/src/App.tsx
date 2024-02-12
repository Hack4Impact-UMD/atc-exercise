import React from "react";
import "./App.css";
import Home from "./Home"
import Pokimon from "./Pokimon"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Pokimon/>}/>
        <Route path = "/" element = {<Home/>}/>                                                                                                                                                                                                                                                   "
      </Routes>
    </BrowserRouter>
  );
}

export default App;
