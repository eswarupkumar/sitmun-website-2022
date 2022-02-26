import React from "react";
import "../../css/about-us.css";
import { Container } from "react-bootstrap";
import aboutImg from "../../img/about.jpg";
import Heading from "../common/Heading";

function AboutUs() {
  // This is about
  return (
    <Container className="about-us" id="about">
      <Heading head="ABOUT THIS EVENT" />
      <div className="about-us-wrapper">
        <img src={aboutImg} alt="about-event" data-aos="fade-down" />
        <div className="about-us-content">
          <p>
            Silicon Institute Of Technology Model United Nations (SITMUN) is a
            simulation of the United Nations where students delegate on behalf
            of member countries to find solutions to the rising global issues
            through research, drafting, lobbying and debating. Students can also
            participate as members of the International Press (as
            reporters/photographers). SITMUN has always been a unique
            conglomeration of learning and experiencing a MUN, and this time
            again, we are back with an unparalleled edition. Not even a pandemic
            can stop those who dare, and this 11th-13th March, we aim at
            bringing revolution through resolution. We are in, are you!?
          </p>
          <div className="info-links">
            <div className="btn-section">
              <a href="/#about" className="hero-button">
                Know More
              </a>
              <a
                href="https://rb.gy/s1uypm"
                target="_blank"
                rel="noreferrer"
                className="hero-button"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AboutUs;
