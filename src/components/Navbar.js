import React from 'react';

import "./Navbar.css";

export default function Navbar() {
  return (
    <>
    <section id="home">
    <div className="row">
      <div className="container mb-5">
        <div className="col-md-12">
          <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand text-light textLogo" href="#">Lady Dahny</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link navLink" href="#home">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link navLink" href="#">Shop</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link navLink" href="#about">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link navLink" href="#contact">Contact</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link navLink" href="#">Register</a>
                  </li>
                  <li class="nav-item li-btnLogin">
                    <a class="btnLogin" href="#">Login</a>
                  </li>
                </ul>
              </div>
          </nav>
        </div>
      </div>
    </div>
    </section>
    </>
  );
}
