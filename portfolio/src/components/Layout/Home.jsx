import React, { useState } from "react";
import "../CSS/Home.css";
const images = [
  "https://www.collegebatch.com/static/clg-gallery/aryabhatta-knowledge-university-patna-275729.jpg",
  "https://www.joonsquare.com/usermanage/image/business/aryabhatta-knowledge-university-patna-15555/aryabhatta-knowledge-university-patna-aryabhatta-knowledge-university-002.jpg",
  "https://akubihar.ac.in/assets/img/slideshow/bg_convocation.jpg",
  "https://www.collegebatch.com/static/clg-gallery/aryabhatta-knowledge-university-patna-275733.jpg",
];
const Home = () => {
  const [curr, SetCurr] = useState(0);
  const nextSlide = () => {
    SetCurr(curr === images.length - 1 ? 0 : curr + 1);
  };
  const prevSlide = () => {
    SetCurr(curr === 0 ? images.length - 1 : curr - 1);
  };
  return (
    <section className="home-section">
      <div className="typewriter">
        <h3>This is a portfolio website</h3>
      </div>
      <div id="carouselExample" className="carousel home-image-slider">
        {images.map(
          (value, index) =>
            curr === index && (
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    style={{ height: "70vh", width: "70vw" }}
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
export default Home;
