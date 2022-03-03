import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "../css/committee.css";
import "../css/ourteam.css";
import disec from "../img/DISEC.png";
import unfccc from "../img/UNFCCC.png";
import unhrc from "../img/UNHRC.png";
import ip from "../img/IP LOGO.png";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/Footer";
import ScrollTop from "../components/common/ScrollTop";
import cmhero from "../img/about-img.jpg";
import { Container } from "react-bootstrap";
import Loading from "../components/common/Loading";
import unhrc_agenda from "../img/unhrc_agenda.jpeg";
import disec_agenda from "../img/disec_agenda.jpeg";
import unfcc_agenda from "../img/unfcc_agenda.jpeg";
import unhrc_eb from "../img/unhrc_eb.jfif";
import unfcc_eb from "../img/unfcc_eb.jfif";
import ip_eb from "../img/ip_eb.jfif";
import disec_eb from "../img/disec_eb.jpg";

function CommitteePage() {
  const [loading, setLoading] = useState(true);
  const [unhrc_Agenda, setUnhrc_Agenda] = useState(false);
  const [disec_Agenda, setDisec_Agenda] = useState(false);
  const [unfcc_Agenda, setUnfcc_Agenda] = useState(false);

  const [unhrc_Eb, setUnhrc_Eb] = useState(false);
  const [disec_Eb, setDisec_Eb] = useState(false);
  const [unfcc_Eb, setUnfcc_Eb] = useState(false);
  const [ip_Eb, setIp_Eb] = useState(false);

  useEffect(() => {
    setLoading(true);
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflowY = "scroll";
    }, 4000);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {loading ? <Loading /> : <Navbar />}
      <ScrollTop />
      <section className="herocm">
        <div className="cm-hero-wrap"></div>
        <img src={cmhero} alt="cm-hero" />
        <div className="cm-heading">
          <div className="headerText">Committees </div>
          {/* <div className="taglineText">
            "A group who keep minutes and waste hours."
          </div> */}
        </div>
      </section>

      <Container className="flex">
        <div className="card1">
          <img src={unhrc} alt="Avatar" />
          {/* <div className="text1"><h3><b>SIT MUN</b></h3></div> */}
          <div className="card-container">
            <div className="text">
              Human rights are an innate virtue that we all should possess and
              have for the utility. Since the dawn of civilization, numerous
              ideologies and political revolutions have led to a dire
              circumstance in matters of human rights. Ranging from the refugee
              crisis to the poverty issues, many lives have been subjugated to
              utter disdain, to tackle this issue, UNHRC was established.
            </div>
            <div className="committee_details">
              <button
                className="committe_page-button"
                onClick={() => {
                  setUnhrc_Eb(true);
                }}
              >
                EB Details
              </button>
              <button
                className="committe_page-button"
                onClick={() => {
                  setUnhrc_Agenda(true);
                }}
              >
                Agenda
              </button>
            </div>
            <Modal
              size="lg"
              show={unhrc_Eb}
              onHide={() => {
                setUnhrc_Eb(false);
              }}
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <img className="agenda_img" src={unhrc_eb} alt="" />
              </Modal.Body>
            </Modal>
            <Modal
              size="lg"
              show={unhrc_Agenda}
              onHide={() => {
                setUnhrc_Agenda(false);
              }}
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <img className="agenda_img" src={unhrc_agenda} alt="" />
              </Modal.Body>
            </Modal>
          </div>
        </div>

        <div className="card1">
          <center>
            <img src={disec} alt="" />
          </center>
          <div className="text1">
            <h3>
              <b>DISEC</b>
            </h3>
          </div>
          <div className="card-container">
            <div className="text">
              The very idea of humanity creating methodologies to protect their
              sovereignty as had come across numerous changes. Now we reside in
              the age where nuclear power, space technology and bioweapons are
              the imminent threat to the mortal existence on the planet. As is
              the truth, every coin has two sides, so does this situation, thus
              their needs to be a mechanism which ensures the safety.
            </div>
            <div className="committee_details">
              <button
                className="committe_page-button"
                onClick={() => {
                  setDisec_Eb(true);
                }}
              >
                EB Details
              </button>
              <button
                className="committe_page-button"
                onClick={() => {
                  setDisec_Agenda(true);
                }}
              >
                Agenda
              </button>
            </div>
            <Modal
              size="lg"
              show={disec_Eb}
              onHide={() => {
                setDisec_Eb(false);
              }}
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <img className="agenda_img" src={disec_eb} alt="" />
              </Modal.Body>
            </Modal>
            <Modal
              size="lg"
              show={disec_Agenda}
              onHide={() => {
                setDisec_Agenda(false);
              }}
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <img className="agenda_img" src={disec_agenda} alt="" />
              </Modal.Body>
            </Modal>
          </div>
        </div>

        <div className="card1">
          <center>
            <img src={unfccc} alt="Avatar" />
          </center>
          {/* <div className="text1"><h3><b>SIT MUN</b></h3></div> */}
          <div className="card-container">
            <div className="text">
              It is a matter of grave concern, that a majority chunk of the
              current day modern world has forgot that they aren’t the only ones
              residing. In a way utterly dreadful alterations have been
              implicated upon the world climate. Issues like global warming and
              rise in natural disasters seem to have become the new normal.
            </div>
            <div className="committee_details">
              <button
                className="committe_page-button"
                onClick={() => {
                  setUnfcc_Eb(true);
                }}
              >
                EB Details
              </button>
              <button
                className="committe_page-button"
                onClick={() => {
                  setUnfcc_Agenda(true);
                }}
              >
                Agenda
              </button>
            </div>
            <Modal
              size="lg"
              show={unfcc_Eb}
              onHide={() => {
                setUnfcc_Eb(false);
              }}
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <img className="agenda_img" src={unfcc_eb} alt="" />
              </Modal.Body>
            </Modal>
            <Modal
              size="lg"
              show={unfcc_Agenda}
              onHide={() => {
                setUnfcc_Agenda(false);
              }}
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <img className="agenda_img" src={unfcc_agenda} alt="" />
              </Modal.Body>
            </Modal>
          </div>
        </div>

        <div className="card1">
          <center>
            <img src={ip} alt="Avatar" />
          </center>
          <div className="text1">
            <h3>
              <b>IP</b>
            </h3>
          </div>
          <div className="card-container">
            <div className="text">
              A revolution is a characteristic feature of ideation and
              curiosity, nevertheless this goes hand-in-hand with recognition
              and observation. International Press is the committee responsible
              for formulating reports and capturing the paramount snippets of
              the entire conference. The International Press Delegation allows
              participants to act as unbiased journalists, reporting on the
              proceedings of each simulation in the Conference.
            </div>
            <div className="committee_details">
              <button
                className="committe_page-button"
                onClick={() => {
                  setIp_Eb(true);
                }}
              >
                EB Details
              </button>
            </div>
            <Modal
              size="lg"
              show={ip_Eb}
              onHide={() => {
                setIp_Eb(false);
              }}
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <img className="agenda_img" src={ip_eb} alt="" />
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default CommitteePage;
