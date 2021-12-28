import React from "react";
import SlantDiv from "../common/SlantDiv";
import UnderLine from "../common/UnderLine";
import "../../css/Register.css";
import { Button } from "react-bootstrap";

function RegisterBtn() {
    return (
      <div className="registerdiv">
        <SlantDiv alt={true} />
        <h2>Haven't registered Yet?</h2>
        <UnderLine col='light' />
        <p>What are you waiting for?</p>
        <Button href="#" className="reg-btn text-center">Register Now!</Button>
      </div>
    );
  }
  
  export default RegisterBtn;