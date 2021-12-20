import React, {useState, useEffect} from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import {Link, useNavigate, useLocation} from "react-router-dom";
import logo from "../../img/logo.png";
import "../../css/navbar.css";

function NavbarSection() {
  const [navBackground, setNavBackground] = useState(false);
  // let navigate = useNavigate();
  let location = useLocation();
  const setNavbar = ()=>{
    if(location.pathname!=='/'){
      setNavBackground(true)
    }else if(window.scrollY>86){
      setNavBackground(true)
    }else{
      setNavBackground(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', setNavbar);
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0);
    setNavbar();
    // eslint-disable-next-line
  }, [location.pathname])

  return (
    <Navbar variant={`${navBackground ? "dark": 'light'}`} expand="lg" fixed="top" className={`navbar ${navBackground ? 'solid': 'transparent'} `}>
      <Container>
        <Navbar.Brand href="/">
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
          <Link to="/" className={location.pathname==='/' && !location.hash?"nav-link  navbar-menu active":"nav-link  navbar-menu"}>HOME</Link>
          <Link to={{pathname: '/', hash: '#about'}} className={location.pathname==='/' && location.hash==='#about' ?"nav-link  navbar-menu active":"nav-link  navbar-menu"}>ABOUT</Link>
          <Link to="/team" className={location.pathname==='/team'?"nav-link  navbar-menu active":"nav-link  navbar-menu"}>TEAM</Link>
          <Link to="/committee" className={location.pathname==='/committee'?"nav-link  navbar-menu active":"nav-link  navbar-menu"}>COMMITTEE</Link>
          <Nav.Link href="#home" className='navbar-menu-button'><Button className='register-button'>REGISTER</Button></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSection;