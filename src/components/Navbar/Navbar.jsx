import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo/pic.png';
import '../Navbar/Navbar.scss';
import avatar from '../../assets/avatar.jpg'

export const NavbarScreen = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='container' fluid>
        <Navbar.Brand className='navBrand' href="#"><img src={logo} />Programmer TechnoFunn</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='mainNav'>
          <Nav
            className="me-auto my-2 my-lg-0 Nav"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='navLink' href="#action1">Services</Nav.Link>
            <Nav.Link className='navLink' href="#action2">Career</Nav.Link>
            <Nav.Link className='navLink' href="#action2">About Us</Nav.Link>
            <Nav.Link className='navLink' href="#action2">Contact Us</Nav.Link>
            <img className='userpic' src={avatar} />
            <p className='user'>Shivam Chaudhary</p>

            <Button>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
