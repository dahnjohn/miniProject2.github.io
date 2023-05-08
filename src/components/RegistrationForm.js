import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './LoginForm';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password, cpassword } = formData;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('cpassword', cpassword);

    if (name === '' || email === '' || password === '' || cpassword === '') {
      Swal.fire('Opps..!', 'input field has no value!', 'error');
    } else {
      if (password.length >= 6 && password.length <= 20) {
        if (password !== cpassword) {
          Swal.fire('Opps..!', 'Password not matching!', 'error');
        } else {
          Swal.fire('Good job!', 'Register successful!', 'success');
          setTimeout(() => {
            navigate('/LoginForm');
          }, 5000);
        }
      } else {
        Swal.fire('Opps..!', 'Input mim six digit password!', 'error');
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
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
      <Form.Group controlId="formCPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          name="cpassword"
          id="cpassword"
          value={formData.cpassword}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="sub-button">
        Register
      </Button>
    </Form>
  );
};

export default RegistrationForm;
