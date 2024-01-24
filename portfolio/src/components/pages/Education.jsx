import React from "react";
import "../CSS/Education.css";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
const Education = () => {
  return (
    <>
      <section className="education-section">
        <div className="education-content">
          <p>Graduation</p>
          <img src={image1} />
          <h6>Session : 2017 - 2021</h6>
          <h6>Branch : CSE</h6>
          <h6>Percentage : 74.99</h6>
        </div>
        <div className="education-content">
          <p>Intermediate</p>
          <img src={image2} />

          <h6>Percentage : 64.6</h6>
        </div>
        <div className="education-content">
          <p>Secondry School</p>
          <img src={image3} />

          <h6>Percentage :68</h6>
        </div>
      </section>
    </>
  );
};
export default Education;
