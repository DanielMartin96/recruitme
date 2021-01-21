import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Jumbotron as Hero, Button } from "react-bootstrap";

const Jumbotron = ({ title, subtitle, button, to }) => {
  return (
    <Hero>
      <Container>
        <h1>{title}</h1>
        <h5>{subtitle}</h5>
        <Link to={to}>
          <Button>{button}</Button>
        </Link>
      </Container>
    </Hero>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(Jumbotron);
