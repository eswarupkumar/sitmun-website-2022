import React from "react";
import SlantDiv from "../common/SlantDiv";
import "../../css/Register.css";
import { Button, Container } from "react-bootstrap";
import Heading from "../common/Heading";

function RegisterBtn() {
    return (
      <div style={{position: 'relative'}}>
        <SlantDiv alt={false} />
        <Container className="registerdiv">
          <Heading head="Haven't registered?" col='light' />
          <p>What are you waiting for?</p>
          <Button href="#" className="reg-btn text-center">Register Now!</Button>
        </Container>
      </div>
    );
  }
  
  export default RegisterBtn;