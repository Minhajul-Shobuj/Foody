import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
        <Navbar sticky='top' bg="light" expand={false}>
  <Container>
  <Navbar.Toggle className='me-2' aria-controls="offcanvasNavbar" />
    <Navbar.Brand as={Link} to='/home' className='me-auto text-bold'>FoodY</Navbar.Brand>
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="start"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="bg-dark justify-content-end flex-grow-1 pe-3">
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <Nav.Link as={Link} to='/foods'>Foods</Nav.Link>
          <Nav.Link as={Link} to='/about'>About</Nav.Link>
          <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
        </>
    );
};

export default Navigation;