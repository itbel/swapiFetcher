import React from "react";

import { Navbar, Row, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Row className="justify-content-center">
      <Navbar>
        <Nav className="navSetting">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/person">Person</Nav.Link>
          <Nav.Link href="/planet">Planet</Nav.Link>
        </Nav>
      </Navbar>
    </Row>
  );
};

export default Navigation;
