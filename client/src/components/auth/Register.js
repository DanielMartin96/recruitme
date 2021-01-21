import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import { Container, Card, Form, Button } from "react-bootstrap";

const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Card style={{ position: "relative", top: "60px" }}>
        <Card.Header>
          <h2>Sign Up</h2>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                value={name}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                value={email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                value={password}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword2">
              <Form.Label>Re-enter Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Re-enter Password"
                onChange={(e) =>
                  setFormData({ ...formData, password2: e.target.value })
                }
                value={password2}
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
          <br />
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
