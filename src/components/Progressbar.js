import React from "react";
import "./Progressbar.css";
//criando barra de progresso
const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        <span className="progress-text">{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
