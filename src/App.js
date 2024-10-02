import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./home/index";
import Privacy from "./home/terms/index";
//criando rotas
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
