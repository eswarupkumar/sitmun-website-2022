import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../css/navbar.css";

function NavbarSection() {
  const [navBackground, setNavBackground] = useState(false);
  let location = useLocation();
  const setNavbar = () => {
    if (window.scrollY > 100) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };
  window.addEventListener("scroll", setNavbar);
  useEffect(() => {
      if(!location.hash){
        window.scrollTo(0, 0);
      }
      setNavbar();
    // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <Navbar
      variant="dark"
      expand="lg"
      fixed="top"
      className={`navbar ${navBackground ? "solid" : "transparent"} `}
    >
      <Container>
        <Navbar.Brand href="/#hero">
          <img
            src={logo}
            width="76"
            height="76"
            className="d-inline-block align-top"
            alt="SITMUN logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <a
            href="/#gallery"
            className={
              location.pathname === "/" && location.hash === "#gallery"
                ? "nav-link  navbar-menu active"
                : "nav-link  navbar-menu"
            }
          >
            GALLERY
          </a>
          <a
            href="/#faq"
            className={
              location.pathname === "/" && location.hash === "#faq"
                ? "nav-link  navbar-menu active"
                : "nav-link  navbar-menu"
            }
          >
            FAQ
          </a>
          <Link
            to="/team"
            className={
              location.pathname === "/team"
                ? "nav-link  navbar-menu active"
                : "nav-link  navbar-menu"
            }
          >
            TEAM
          </Link>
          <Link
            to="/committee"
            className={
              location.pathname === "/committee"
                ? "nav-link  navbar-menu active"
                : "nav-link  navbar-menu"
            }
          >
            COMMITTEE
          </Link>
          <Nav.Link
            href="https://forms.gle/LboD3ygEqvkEHvLVA"
            target="_blank"
            className="navbar-menu-button"
          >
            <Button className="register-button">REGISTER</Button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSection;
