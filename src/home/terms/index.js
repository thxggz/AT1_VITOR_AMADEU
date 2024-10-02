import React, { useState } from "react";
import "./styles.css";
import logo from "../../assets/img/mengonot.png";
import arrow from "../../assets/img/arrow.svg";

import Navbar from "../../components/navbar";

function Privacy() {
  // Função para rolar até o menu principal
  const scrollToMenu = () => {
    const menuElement = document.querySelector(".logo"); // Seleciona o primeiro elemento com a classe 'logo'
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="content14">
        <h1>Política de Privacidade e Termos de Uso</h1>
      </div>

      <footer>
        <div className="footer-contentdsk">
          <p>Termos de Serviço | Política de Privacidade</p>
        </div>
        <div className="footer-copyrightdsk">
          &copy; 2024 Mengo notícias. Todos os Direitos Reservados
        </div>
        {}
        <div
          onClick={scrollToMenu}
          style={{ cursor: "pointer", marginTop: "20px" }}
        >
          <img
            src={arrow}
            height="24"
            width="24"
            alt="scroll to top"
            title="scroll to top"
          />
        </div>
      </footer>
    </>
  );
}

export default Privacy;
