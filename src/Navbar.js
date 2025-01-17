import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';  // Import HashLink

const CustomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar fixed-top bg-opacity-25"> {/* bg-opacity for navbar */}
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <h3>Adver</h3>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav" in={isMenuOpen}>
          <Nav className="mx-auto">
            <HashLink smooth to="/#cultural-historical" className="nav-link text-opacity-100 fs-5">Cultural and Historical Attractions</HashLink> {/* text-opacity */}
            <HashLink smooth to="/#natural-wonders" className="nav-link text-opacity-90 fs-5">Natural Wonders</HashLink>
            <HashLink smooth to="/#hill-country" className="nav-link text-opacity-90 fs-5">Hill Country</HashLink>
            <HashLink 
              smooth 
              to="/#beaches-and-coastal-beauty" 
              className="nav-link text-opacity-90 fs-5"
            >
              Beaches and Coastal Beauty
            </HashLink>
            <HashLink smooth to="/#unique-experiences" className="nav-link text-opacity-90 fs-5">Unique Experiences</HashLink>
          </Nav>
          <Button
            variant="outline-light"
            className="btn-e-magazine ms-lg-3"
            onClick={() => window.location.hash = '#top'}  // Reset to top section
          >
            Trending
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
