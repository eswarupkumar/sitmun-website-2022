import React from "react";
import { Container } from "react-bootstrap";
import "../../css/msgfromSG.css";
import sec_gen from "../../img/Sec Gen.jpg";
import Heading from "../common/Heading";

function MsgfromSG() {
  return (
    <Container>
      <div style={{ position: "relative" }} className="msgfromsg">
        <Heading head="Message from Secretary General" />
        <center>
          <img id="sgimg" src={sec_gen} alt="" />
        </center>
        <p>
          Greeting to the delegates and my secretariat,<br></br>
          <br></br> "It is not about the resolution you make! It is about the
          revolution you start." It is a moment of immense joy for me to invite
          you to the annual SIT Model United Nations Conference on behalf of my
          secretariat. This year from 4th-6th March, SITMUN 2022 will be set in
          motion. Keeping in mind the disturbing COVID-19, we assure to follow
          all COVID protocols and take necessary precautions to curb the
          situation. We are committed to ensuring that the delegates shall have
          an experience of a lifetime and learn values that they can uphold in
          their lives going ahead as future citizens. For those who dare, SITMUN
          2022 will be an opportunity to revamp their diplomatic, negotiating,
          lobbying and debating skills, and we are prepared to give them that
          experience. Yet again, the legacy will continue, and SITMUN is back
          with unprecedented surprises.
          <br></br>
          <br></br>
          Sincerely,<br></br>Isha Bharadwaj<br></br>Secretary-General, SIT Model
          United Nations 2022
        </p>
      </div>
    </Container>
  );
}

export default MsgfromSG;
