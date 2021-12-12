import Home from "./Home";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  return <h1>Hello React Router</h1>;
}

ReactDOM.render(
  <BrowserRouter>
  <Routes><Home /></Routes>
    
  </BrowserRouter>,
  document.querySelector('#root')

  );
