import React from "react";
import logo from "../../img/logo.png";
import "../../css/footer.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from "@mui/icons-material/Instagram";
import { Container } from "react-bootstrap";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <Container className="footer-div">
        <div>
          <img className="footer-logo" src={logo} alt="logo-img" height="120" />
          <div className="socials">
            {/* <a className="facebook" href="https://www.facebook.com/sitmunbbsr/">
              <FacebookOutlinedIcon fontSize="large" />
            </a> */}
            <a className="insta" href="https://www.instagram.com/sitmunbbsr/" target="_blank">
              <InstagramIcon fontSize="large" />
            </a>
            <a className="whatsapp" href="https://wa.me/+917873712452" target="_blank">
              <WhatsAppIcon fontSize="large" />
            </a>
          </div>
        </div>
        <div className="footer_header">
          <h4>QUICK LINKS</h4>
          <a href="https://silicon.ac.in/" target="_blank">
            Silicon
          </a>
          <a href="/#about">About This Event</a>
          <a href="/#gallery">Gallery</a>
          <Link to="/team" >Our Team</Link>
          <Link to="/committee">Committee</Link>
        </div>
        <div className="footer_header">
          <h4>CONTACT US</h4>
          <p>
            USG Public Relations <br />
            SIT MUN 2021 <br />
            Silicon Institute of Technology <br />
            Phone: +91 7873712452 <br />
            Email: meta.academics@silicon.ac.in
          </p>
        </div>
        <div>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.7806763365907!2d85.80414731489338!3d20.350677286369603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1908e064769e73%3A0x9288172f3a98c7a4!2sSilicon%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1638171552502!5m2!1sen!2sin"
            width="300"
            height="200"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
