import React from 'react';
import { Button, Container, Form, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar className='mt-2'>
      {/* TODO: add image */}
      <Container>
        <Navbar.Brand href="#">
          <img
            alt='animal crossing leaf'
            src='https://www.models-resource.com/resources/big_icons/36/35733.png'
            width='30'
            height='30'
            className="d-inline-block align-top"
          />{' '}
          Animal Crossing Art Work</Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">🎨</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Header;