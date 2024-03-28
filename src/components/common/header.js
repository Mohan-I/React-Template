import React from 'react';
import '../../assets/css/custom.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <img src={logo} width="5%"/>
        <Navbar.Brand href="#">ChessBoard Battles</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink href="#action1" className="nav-content" to="/" >Home</NavLink>
            <NavLink href="#action2" className="nav-content" to="/about">About</NavLink>
            <NavLink href="#action2" className="nav-content" to="/courses">Courses</NavLink>
            <NavDropdown title="Language" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">English (US)</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                English (UK)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Spanish
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Hindi
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Japanese
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Other
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;