import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Projects.css";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
const images = [image4, image5, image6, image7];
const Projects = () => {
  const [curr, SetCurr] = useState(0);
  const nextSlide = () => {
    SetCurr(curr === images.length - 1 ? 0 : curr + 1);
  };
  const prevSlide = () => {
    SetCurr(curr === 0 ? images.length - 1 : curr - 1);
  };
  return (
    <section className="projects-section">
      <div className="project-content">
        <ul className="list-group">
          <li className="list-group-item active" aria-current="true">
            Project Name
          </li>
          <li className="list-group-item bg-warning">
            Stack : HTML5, CSS3, JavaScript, ReactJS
          </li>
          <li className="list-group-item  bg-warning">
            Development Mode : Self
          </li>
          <li className="list-group-item  bg-warning">
            Internship: Can Technology
          </li>
        </ul>
        <button type="button" className="btn btn-dark">
          <Link
            to="https://github.com/Bittu121/portfolio"
            target="_blank"
            id="deployed-link"
          >
            Deployed
          </Link>
        </button>
      </div>
      <div id="carouselExample" className="carousel image-slider">
        {images.map(
          (value, index) =>
            curr === index && (
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    style={{ height: "60vh", width: "120vw" }}
                    src={value}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
            )
        )}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          onClick={prevSlide}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          onClick={nextSlide}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};
export default Projects;
