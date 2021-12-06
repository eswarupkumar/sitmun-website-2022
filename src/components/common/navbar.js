import React, {useState, useEffect} from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../../img/logo.png";
import "../../css/navbar.css";

function NavbarSection() {
  const [navBackground, setNavBackground] = useState(false);
  const setNavbar = ()=>{
    if(window.scrollY>86){
      setNavBackground(true)
    }else{
      setNavBackground(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', setNavbar);
    // eslint-disable-next-line
  }, [])
  return (
    <Navbar variant={`${navBackground ? "dark": 'light'}`} expand="md" fixed="top" className={`navbar ${navBackground ? 'solid': 'transparent'} `}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="SITMUN logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="#home" className='navbar-menu'>HOME</Nav.Link>
          <Nav.Link href="#home" className='navbar-menu'>TEAM</Nav.Link>
          <Nav.Link href="#home" className='navbar-menu'>COMMITTEE</Nav.Link>
          <Nav.Link href="#home" className='navbar-menu-button'><Button href="#home" className='register-button'>REGISTER</Button></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSection;