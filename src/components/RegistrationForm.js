import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const RegistrationForm = () => {
const [formData, setFormData] = useState({
name: '',
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
// TODO: Add form submission logic here
};

return (
<Form onSubmit={handleSubmit}>
    <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} required />
    </Form.Group>
    <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} required />
    </Form.Group>
    <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" id="password" value={formData.password} onChange={handleInputChange} required />
    </Form.Group>
        <Button variant="primary" type="submit" className="sub-button">Register</Button>
</Form>
);
};

export default RegistrationForm;