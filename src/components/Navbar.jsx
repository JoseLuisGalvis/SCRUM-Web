import React, { useState } from "react";
import "../../src/App.css";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light "
      id="home-nav"
    >
      <a
        href="https://www.scrumstudy.com/"
        className="d-flex align-items-center logo-text"
      >
        <img
          src="/images/logo_SCRUM.png"
          alt="logo"
          className="me-2 logo-image"
        />
        <h5 className="logo-text text-white mx-2">Método Scrum</h5>
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={expanded}
        aria-label="Toggle navigation"
        onClick={handleToggle}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link text-white" href="#home-nav">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#artefactos">
              Artefactos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#ceremonias">
              Ceremonias
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
