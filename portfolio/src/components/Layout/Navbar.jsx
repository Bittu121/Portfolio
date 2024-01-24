import React from "react";
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid bg-dark nav-padding">
        <Link className="navbar-brand text-light nav-items" to="/">
          Portfolio
        </Link>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
        className="collapse navbar-collapse bg-dark nav-padding"
        id="navbarTogglerDemo02"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              className="nav-link active text-light nav-items-list"
              aria-current="page"
              to="/education"
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link active text-light nav-items-list"
              aria-current="page"
              to="/stack"
            >
              Stack
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link active text-light nav-items-list"
              aria-current="page"
              to="/project"
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link active text-light nav-items-list"
              aria-current="page"
              to="/experience"
            >
              Workperience
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
