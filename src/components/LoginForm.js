import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    const email = formData.email;
    const password = formData.password;

    const Email = localStorage.getItem('email');
    const Password = localStorage.getItem('password');

    if (email === '' && password === '') {
      Swal.fire('Opps..!', 'input field has no value!', 'error');
    } else {
      if (email === email && password === password) {
        Swal.fire('Good job!', 'login successful!', 'success');
        setTimeout(() => {
          window.location.href = 'https://www.google.com';
        }, 1000);
      } else {
        Swal.fire('Opps..!', 'Something is wrong!', 'error');
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="login">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
