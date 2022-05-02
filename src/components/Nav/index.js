/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light float-right navigation">
      <div className="container-fluid">
        <a
          onClick={() => handlePageChange("Home")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav" />

          <a
            class="nav-link active"
            aria-current="page"
            
            onClick={() => handlePageChange("About")}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>

          <a
            onClick={() => handlePageChange("Projects")}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Projects" ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </a>

          {/* <a
            
            onClick={() => handlePageChange("Contact")}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a> */}
          <a
            className="nav-link"
            href="https://docs.google.com/document/d/1oRjUISakMDb9pPmXiGCkLRAozME5FoP2-8pO4BCecjA/edit?usp=sharing"
          >
            Resume
          </a>
        </div>
      </div>
      <h1 className="navName">
      B  <span style={{color:"black"}}>CHAMI </span>
      </h1>
    </nav>
  );
}

export default Nav;
