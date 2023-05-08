import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./Navbar.css";
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import {BrowserRouter} from 'react-router-dom';

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal2 = () => {
    setShowModal2(true);
  };

  const handleCloseModal2 = () => {
    setShowModal2(false);
  };

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
                <a class="nav-link navLink" onClick={handleShowModal}>Register</a>
              </li>
              <li class="nav-item li-btnLogin">
                <a class="btnLogin" onClick={handleShowModal2}>Login</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    </div>
  </section>
  {/* modal registration */}
  <BrowserRouter>
  <Modal show={showModal} onHide={handleCloseModal}>
    <Modal.Header closeButton>
      <Modal.Title>Registration Form</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <RegistrationForm />
    </Modal.Body>
  </Modal>
  </BrowserRouter>

  {/* modal login */}
  <BrowserRouter>
  <Modal show={showModal2} onHide={handleCloseModal2}>
    <Modal.Header closeButton>
      <Modal.Title>Login Form</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <LoginForm />
    </Modal.Body>
  </Modal>
  </BrowserRouter>
</>
);
}
