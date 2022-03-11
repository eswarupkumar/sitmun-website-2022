import React, { useState } from "react";
import "../../css/when.css";
import SlantDiv from "../common/SlantDiv";
import { Container, Modal, Row } from "react-bootstrap";
import locationblack from "../../img/locationblack.svg";
import day1 from "../../img/itenary/day1.jpeg";
import day2 from "../../img/itenary/day2.jpeg";
import day3 from "../../img/itenary/day3.jpeg";
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
    <div style={{ position: "relative" }} className="WhenWhere">
      <Container>
        <Heading head="SAVE THE DATE " />
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
            <h5 id="h5__2">MARCH 11-13</h5>
          </div>
          <div
            className="col-lg d-flex justify-content-center mx-auto"
            data-aos="zoom-in-up"
            onClick={handleShow}
          >
            <img className="schedule__img" src={scheduleblack} alt="schedule" />
            <h5 id="h5__3">
              SCHEDULE
              {/* <p>(Coming Soon)</p> */}
            </h5>
            <Modal
              size="lg"
              show={show}
              onHide={() => {
                setShow(false);
              }}
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <Tabs
                  id="controlled-tab-example"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-2"
                >
                  <Tab eventKey="Day1" title="Day-1">
                    <img className="itenary_schedule" src={day1} alt="" />
                  </Tab>
                  <Tab eventKey="Day2" title="Day-2">
                    <img className="itenary_schedule" src={day2} alt="" />
                  </Tab>
                  <Tab eventKey="Day3" title="Day-3">
                    <img className="itenary_schedule" src={day3} alt="" />
                  </Tab>
                </Tabs>
              </Modal.Body>
            </Modal>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default WhenWhere;
