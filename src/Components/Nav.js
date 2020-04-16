import React from "react";

import { Navbar, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Row className="justify-content-center">
      <Navbar bg="lavender">
        <NavLink to="/">Home</NavLink> <NavLink to="/person">Person</NavLink>
        <NavLink to="/about">About</NavLink>
      </Navbar>
    </Row>
  );
};

export default Navigation;
