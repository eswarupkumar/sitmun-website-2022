import Grid from "@mui/material/Grid";
import * as React from "react";
import { makeStyles } from "@mui/styles";

import Heading from "../common/Heading";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../css/ourteam.css";
import img2 from "../../img/team.svg";
import teamHero from "../../img/teamHero.jpg";

function TeamHero() {
  return (
    <div>
      <section className="herocm">
        <div className="cm-hero-wrap"></div>
        <img src={teamHero} alt="cm-hero" />
        <div className="cm-heading">
          <div className="headerText">Our Team </div>
          {/* <div className="taglineText">
              United we stand divided we fall
            </div> */}
        </div>
      </section>
      {/* <section className="heroeb">
        <Row>
          <Col>
            <Container fluid>
              <div className="row">
                <div className="col-sm-6 d-flex align-item-center justify-content-center">
                  <img className="img-fluid" src={img2} alt=""></img>
                </div>
                <div className="col-sm-6 d-flex flex-column text-center align-item-center justify-content-center">
                  <div className="headerText">Our Team </div>
                  <div className="taglineText">
                    United we stand divided we fall
                  </div>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
    </section>*/}
    </div>
  );
}

export default TeamHero;
