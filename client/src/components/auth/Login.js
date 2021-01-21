import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import { Container, Card, Form, Button } from "react-bootstrap";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Card style={{ position: "relative", top: "60px" }}>
        <Card.Header>
          <h2>Sign In</h2>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={onSubmit}>
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
            <Button type="submit">Submit</Button>
          </Form>
          <br />
          <p>
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
