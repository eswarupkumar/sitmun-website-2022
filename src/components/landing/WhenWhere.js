import React, { useState } from "react";
import "../../css/when.css";
import SlantDiv from "../common/SlantDiv";
import { Container, Modal, Row } from "react-bootstrap";
import locationblack from "../../img/locationblack.svg";
import UnderLine from "../common/UnderLine";
import eventblack from "../../img/eventblack.svg";
import scheduleblack from "../../img/scheduleblack.svg";
import Tabs from "react-bootstrap/Tabs";
import { Tab } from "react-bootstrap";
import Heading from "../common/Heading";

function WhenWhere() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [key, setKey] = useState("Day1");
  return (
    <div style={{ position: "relative"}} className="WhenWhere">
      <SlantDiv alt={false} />
      <Container>
        <Heading head="SAVE THE DATE " col="light" />
        <Row className=" m-lg-2 ">
          <div
            className="col-lg d-flex justify-content-center"
            data-aos="zoom-in-up"
          >
            <img src={locationblack} alt="loclogo" />
            <h5 id="h5__1">
              SILICON INSTITUTE <br />
              OF TECHNOLOGY
            </h5>
          </div>
          <div
            className="col-lg d-flex justify-content-center"
            data-aos="zoom-in-down"
          >
            <img src={eventblack} alt="event" />
            <h5 id="h5__2">MARCH 3-5</h5>
          </div>
          <div
            className="col-lg d-flex justify-content-center mx-auto"
            data-aos="zoom-in-up"
          >
            <img className="schedule__img" src={scheduleblack} alt="schedule" />
            <h5 id="h5__3" onClick={handleShow}>
              SCHEDULE
            </h5>
            <Modal size="lg" show={show} onHide={handleClose} className="modal">
              <Modal.Header>
                <Modal.Title>
                  <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-2"
                  >
                    <Tab eventKey="Day1" title="Day-1">
                      <img src={locationblack} alt="" />
                    </Tab>
                    <Tab eventKey="Day2" title="Day-2">
                      <img src={scheduleblack} alt="" />
                    </Tab>
                    <Tab eventKey="Day3" title="Day-3">
                      <img src={eventblack} alt="" />
                    </Tab>
                  </Tabs>
                </Modal.Title>
              </Modal.Header>
            </Modal>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default WhenWhere;
