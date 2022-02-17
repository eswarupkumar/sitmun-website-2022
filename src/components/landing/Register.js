import React from "react";
import SlantDiv from "../common/SlantDiv";
import "../../css/Register.css";
import { Button, Container } from "react-bootstrap";
import Heading from "../common/Heading";

function RegisterBtn() {
  return (
    <div style={{ position: "relative" }}>
      <Container className="registerdiv">
        <Heading head="Haven't registered yet?" />
        <p>Grab your opportunity !</p>
        <Button
          href="https://rb.gy/s1uypm"
          target="_blank"
          className="reg-btn text-center"
        >
          Register
        </Button>
      </Container>
    </div>
  );
}

export default RegisterBtn;
