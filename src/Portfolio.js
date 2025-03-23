import React from "react";
import Tempo from "./images/TempoSS.png";
import Primal from "./images/PrimalSS.png";
import Jobly from "./images/JoblySS.png";
import Pong from "./images/pongSS.jpg";
import PopVault from "./images/PopvaultSS.png";
import Crud from "./images/crudAppSS.png";
import Ecotech from "./images/EcotechSS.png";
import './Portfolio.css';

const images = [
  { src: Ecotech, alt: "Ecotech", link: "https://github.com/xjohnsondev/Ecotech" },
  { src: Tempo, alt: "Tempo", link: "https://github.com/xjohnsondev/Tempo" },
  { src: Primal, alt: "Primal", link: "https://github.com/xjohnsondev/Primal" },
  { src: Crud, alt: "CRUD", link: "https://github.com/xjohnsondev/CRUD-app"},
  { src: PopVault, alt: "PopVault", link: "https://github.com/xjohnsondev/PopVault" },
  { src: Pong, alt: "Pong", link: "https://github.com/xjohnsondev/PONG" },
];

const Portfolio = () => {
  return (
    <div className="portfolio-section">
      <h5 className="portfolio-header">Portfolio</h5>
      <h1 className="title">Check Out Some of My Works.</h1>
      <p className="port-description">
        Below are some of the projects I've worked on, demonstrating my skills and experience in full-stack and mobile development. Each project showcases my ability to create efficient, user-friendly applications using a variety of modern technologies. Feel free to explore and reach out if you have any questions or would like to collaborate.      </p>
      <div className="portfolio-grid">
        {images.map((image, index) => (
          <div key={index} className="portfolio-item">
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img src={image.src} alt={image.alt} className="portfolio-image" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
