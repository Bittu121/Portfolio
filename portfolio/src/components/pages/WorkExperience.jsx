import React, { useState } from "react";
import "../CSS/WorkExperience.css";

import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";
import image10 from "../images/image10.jpg";
const images = [image10, image8, image9];
const WorkExperience = () => {
  const [curr, SetCurr] = useState(0);
  const nextSlide = () => {
    SetCurr(curr === images.length - 1 ? 0 : curr + 1);
  };
  const prevSlide = () => {
    SetCurr(curr === 0 ? images.length - 1 : curr - 1);
  };
  return (
    <section className="experience-section">
      <p>Intern At Can Techonology</p>
      <p>Year : 2024</p>
      <div id="carouselExample" class="carousel image-slider">
        {images.map(
          (value, index) =>
            curr === index && (
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    style={{ height: "65vh", width: "75vw" }}
                    src={value}
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
            )
        )}
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          onClick={prevSlide}
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          onClick={nextSlide}
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};
export default WorkExperience;
