import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
// import { FormControl, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import Form from "react-bootstrap/Form";
import emailjs from "emailjs-com";
import "../../css/query.css";

function Query() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showQueryBtn, setshowQueryBtn] = useState(false);
  const showBtn = () => {
    if (window.scrollY > 86) {
      setshowQueryBtn(true);
    } else {
      setshowQueryBtn(false);
    }
  };
  window.addEventListener("scroll", showBtn);

  function sendEmail(e) {
    e.preventDefault();
    e.target.reset();
    emailjs
      .sendForm(
        "gmail",
        "template_dk4l7k9",
        // {name:"smruti",question:"hello",email:"smrutid12@gmail.com"},
        e.target,
        "user_SSXsyEsQ0riDYwLhG07VC"
      )
      .then((res) => {
        console.log(res);
        console.log(e.target);
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      {showQueryBtn && (
        <div className="query">
          <ContactSupportIcon fontSize="large" onClick={handleShow} />
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>STILL HAVE A QUERY?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={sendEmail}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="form__label">Name:</Form.Label>
                  <Form.Control name="name" type="text" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="form__label">
                    Your Question:
                  </Form.Label>
                  <Form.Control name="question" as="textarea" rows={3} />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="form__label">
                    Email address:
                  </Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="name@gmail.com"
                  />
                </Form.Group>
                <Modal.Footer>
                  <Button className="send__button" type="submit" onClick={handleClose}>
                    Send!
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
}

export default Query;
