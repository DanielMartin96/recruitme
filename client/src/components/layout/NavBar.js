import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = ({ isAuthenticated, logout }) => {
  const guestLinks = (
    <Nav className="ml-auto">
      <Nav.Link href="/search-jobs">Search Jobs</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register">Sign up</Nav.Link>
    </Nav>
  );

  const authLinks = (
    <Nav className="ml-auto">
      <Nav.Link href="/search-jobs">Search Jobs</Nav.Link>
      <Nav.Link onClick={logout}>Logout</Nav.Link>
    </Nav>
  );

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">recruitme</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {isAuthenticated ? authLinks : guestLinks}
      </Navbar.Collapse>
    </Navbar>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(NavBar);
