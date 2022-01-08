import React from "react";
import { Container } from "react-bootstrap";
import "../../css/msgfromSG.css";
import sec_gen from "../../img/Secretary General.jpg";
import Heading from "../common/Heading";

function MsgfromSG() {
    return (
        <Container>
            <div style={{ position: 'relative' }} className="msgfromsg">
                <Heading head="Message from our Secretary" />
                <center><img id="sgimg" src={sec_gen} alt="" /></center>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </Container>
    );
}

export default MsgfromSG;