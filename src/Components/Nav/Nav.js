import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../Assests/logo.png';
import './Navv.css';
function Navfun  ()  {
  return (


    <Navbar expand="lg" className="nav" >
      <Container fluid>
        <Navbar.Brand href="#"><img className='logo' src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='nav-link' href="/homeee">Home</Nav.Link>
            <Nav.Link className='nav-link' href="/aboutus">About Us</Nav.Link>
            <Nav.Link className='nav-link' href="/contactus">Contact Us</Nav.Link>
            <NavDropdown title="Menu" id="Menu">
              <NavDropdown.Item href="/pizza">Pizza</NavDropdown.Item>
              <NavDropdown.Item href="/plats">
                Plats
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/allMenu">
                All Menu
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
            <Button className='search-button' variant="danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Navfun;
