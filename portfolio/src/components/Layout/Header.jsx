import React from "react";
import logo from "../images/logo.png";
import "../CSS/Header.css";
import { jsPDF } from "jspdf";
const Header = () => {
  const handleDownload = () => {
    const pdf = new jsPDF();
    pdf.text("AadharCard.pdf", 10, 10);
    pdf.save("document.pdf");
  };
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a class="navbar-brand header" href="#">
            <img
              src={logo}
              alt="Logo"
              width="50vw"
              height="50vh"
              className="d-inline-block align-text-top"
            />
            <p> Aryabhatta Knowledge University</p>
          </a>
          <button
            onClick={handleDownload}
            id="btn-download"
            type="button"
            className="btn btn-warning"
          >
            AadharCard
          </button>
        </div>
      </nav>
    </>
  );
};
export default Header;
