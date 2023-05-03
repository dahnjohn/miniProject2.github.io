import React from "react";
import "./Navbar.css";



export default function Nabvar() {
  return (
    <>
    
    <div className="row">
    <nav className="navbar navbar-expand-lg mt-3 px-1">
    <div className="container-fluid">
    <a className="navbar-brand text-light fw-bold fs-2 textLogo" href="#">Dahn Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
    
                  <div className="collapse navbar-collapse nav justify-content-end" id="navbarSupportedContent">
                  <ul className="navbar-nav mb-2 mb-lg-0 nav nav-underline" >
    <li className="nav-item">
                        <a className="nav-link  me-4 fw-medium navLink" aria-current="page" href="#">Home</a>
                      </li>

        <li className="nav-item">
                        <a className="nav-link me-4 fw-medium navLink" aria-current="page" href="#">About Us</a>
                      </li>
        
                      <li className="nav-item">
                        <a className="nav-link me-4 fw-medium navLink" aria-current="page" href="#">Our Team</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link me-4 fw-medium navLink" aria-current="page" href="#">Contact Us</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link me-4 fw-medium navLink" aria-current="page" href="#">Blog</a>
                      </li>

                      <li className="nav-item">
                        <button className="btn btn-outline-light rounded-5 btnLogin fw-medium" type="submit">Login</button>
                      </li>

    </ul>
    </div>
    </div>
    </nav>
    </div>

    </>
    );
  }