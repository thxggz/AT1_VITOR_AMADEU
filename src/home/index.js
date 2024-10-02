import React, { useState } from "react";
import "./styles.modules.css";
import logo from "../assets/img/mengonot.png";
import arrow from "../assets/img/arrow.svg";
import maraca1 from "../assets/img/maraca1.jpg";
import maraca2 from "../assets/img/maraca2.jpg";
import maraca3 from "../assets/img/maraca3.jpg";
import Navbar from "../components/navbar";
import ProgressBar from "../components/Progressbar";
import ToggleSwitch from "../components/ToogleSwitch";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDropdown} className="dropdown-button">
        Títulos
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-item">Libertadores: 3</li>
          <li className="dropdown-item">Campeonato Brasileiro: 8</li>
          <li className="dropdown-item">Copa do Brasil: 4</li>
        </ul>
      )}
    </div>
  );
};

const scrollToSection = (className) => {
  const section = document.querySelector(`.${className}`);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const ImageSlider = () => {
  const images = [maraca1, maraca2, maraca3];
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  return (
    <div className="image-slider">
      <button onClick={prevImage} className="slider-button">
        Anterior
      </button>
      <img src={images[currentImage]} alt="Maracanã" className="slider-image" />
      <button onClick={nextImage} className="slider-button">
        Próximo
      </button>
    </div>
  );
};

const Home = () => {
  const scrollToMenu = () => {
    const menuElement = document.querySelector(".logo2"); //Função para chamar a arrow para o topo
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [progress, setProgress] = useState(50);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <header>
        <div className="header-left">
          <div className={isDarkMode ? "dark-mode" : "light-mode"}>
            <ToggleSwitch toggleTheme={toggleTheme} />
          </div>
          <img className="logo2" src={logo} alt="Logo" height="70px" />
        </div>
        <div className="header-container">
          <nav className="header-nav">
            <a href="/">Home</a>
            <a href="/privacy">Termos de uso</a>
            <a onClick={() => scrollToSection("secundario")}>Maracanã</a>
            <a onClick={() => scrollToSection("team-container")}>Ídolos</a>
          </nav>
        </div>
        <div className="header-container"></div>
      </header>

      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <div className="principal">
          <section className="hero2">
            <h1>O Clube de Regatas do Flamengo.</h1>
            <p>
              Fundado em 17 de novembro de 1895, é uma das maiores e mais
              bem-sucedidas instituições esportivas do Brasil. Com uma história
              rica e uma torcida apaixonada, o Flamengo transcende o futebol e
              se tornou um ícone do esporte mundial, conquistando títulos e
              corações por onde passa. O 'Mais Querido' é um clube conhecido por
              sua grandeza e glórias, tanto nas águas quanto nos gramados.
            </p>
            <br />
            <br />
            <button>
              <Dropdown />
            </button>
          </section>
        </div>
      </div>
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <div className="secundario">
          <section className="hero3">
            <h1>Maracanã.</h1>
            <p>
              O Maracanã é um dos estádios mais icônicos do mundo e tem uma
              relação especial com o Flamengo, um dos clubes mais populares do
              Brasil. Inaugurado em 1950, o estádio foi palco de inúmeras
              conquistas do Flamengo, incluindo títulos importantes como o
              Campeonato Brasileiro e a Copa do Mundo de Clubes. A torcida
              rubro-negra, apaixonada e vibrante, transforma cada jogo no
              Maracanã em uma verdadeira festa, criando uma atmosfera única. Com
              sua história rica e emocionante, o Maracanã e o Flamengo se
              entrelaçam, simbolizando a paixão pelo futebol carioca.
            </p>
            <br />
            <br />
            <ImageSlider />
          </section>
        </div>
      </div>
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <div className="team-containerx">
          <div className="team-cardx">
            <div className="profile-image-containerx">
              <img src={maraca2} alt="Júnior" className="profile-image" />
            </div>
            <div className="team-info">
              <h2 className="team-namex">SETOR NORTE</h2>
              <h3 className="team-title"></h3>
              <p className="team-descriptionx">Semifinal Carioca 2024.</p>
            </div>
          </div>
          <div className="team-cardx">
            <div className="profile-image-containerx">
              <img src={maraca1} alt="Zico" className="profile-image" />
            </div>
            <div className="team-infox">
              <h2 className="team-namex">SETOR LESTE</h2>
              <h3 className="team-titlex"></h3>
              <p className="team-descriptionx">Libertadores Quartas 2022.</p>
            </div>
          </div>
          <div className="team-cardx">
            <div className="profile-image-containerx">
              <img src={maraca3} alt="leste" className="profile-image" />
            </div>
            <div className="team-infox">
              <h2 className="team-namex">SETOR SUL</h2>
              <h3 className="team-titlex"></h3>
              <p className="team-descriptionx">Oitavas Copa do Brasil 2023.</p>
            </div>
          </div>
        </div>
        <main>
          <div className="terceiro">
            <section className="hero4">
              <h1>Os maiores ídolos da história do Flamengo. </h1>
            </section>
          </div>
        </main>
        <div className="team-container">
          <div className="team-card">
            <div className="profile-image-container">
              <img
                src="data:image/jpeg;base64,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"
                alt="Júnior"
                className="profile-image"
              />
            </div>
            <div className="team-info">
              <h2 className="team-name">Júnior</h2>
              <h3 className="team-title">Lateral-Direito</h3>
              <p className="team-description">
                Um dos maiores da história do clube conquistou, Campeonato
                Brasileiro, Libertadores de 81 e Intercontinental de 81 (antigo
                mundial de clubes).
              </p>
            </div>
          </div>

          <div className="team-card">
            <div className="profile-image-container">
              <img
                src="https://images2.minutemediacdn.com/image/upload/c_crop,w_1997,h_2662,x_0,y_337/c_fill,w_720,ar_3:4,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/theplayerstribune-br/01fkqrpz4z2prj5mjwp5.jpg"
                alt="Zico"
                className="profile-image"
              />
            </div>
            <div className="team-info">
              <h2 className="team-name">Zico</h2>
              <h3 className="team-title">Meio-Campo</h3>
              <p className="team-description">
                Considerado o maior jogador da história do Flamengo, conquistou,
                Campeonato Brasileiro, Libertadores de 81 e Intercontinental de
                81 (antigo mundial de clubes).
              </p>
            </div>
          </div>
          <div className="team-card">
            <div className="profile-image-container">
              <img
                src="data:image/jpeg;base64,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"
                alt="Gabigol"
                className="profile-image"
              />
            </div>
            <div className="team-info">
              <h2 className="team-name">Gabriel Barbosa</h2>
              <h3 className="team-title">Atacante</h3>
              <p className="team-description">
                Odiado pelos rivais, campeão da Libertadores 2019, 2022,
                Campeonato Brasileiro 2019 e 2020 e da Copa do Brasil 2022.
              </p>
            </div>
          </div>
        </div>
        <div className={isDarkMode ? "dark-mode" : "light-mode"}>
          <div className="videocontrol">
            <h2 className="team-name"> Gols Libertadores 2019/2022 Gabigol:</h2>
            <iframe
              width="250"
              height="250"
              src="https://www.youtube.com/embed/Oj4_L-RpCAE"
              title="GOLS DO GABIGOL EM FINAIS DA CONMEBOL LIBERTADORES"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          <ProgressBar progress={progress} />
        </div>
        <footer>
          <div className="footer-contentdsk">
            <p>Termos de Serviço | Política de Privacidade</p>
          </div>
          <div className="footer-copyrightdsk">
            &copy; 2024 Mengo notícias. Todos os Direitos Reservados
          </div>

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
      </div>
    </>
  );
};

export default Home;
