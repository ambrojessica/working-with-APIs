import React from 'react';
import ac from './images/ac.png';
import { Navbar, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="animal crossing leaf"
            src={ac}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Animal Crossing Art Work
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;