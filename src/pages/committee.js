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
import unhrc_eb_c from "../img/unhrc_eb_c.jpeg";
import unhrc_eb_vc from "../img/unhrc_eb_vc.jpeg";
import unfcc_eb_c from "../img/unfcc_eb_c.jpeg";
import unfcc_eb_vc from "../img/unfcc_eb_vc.jpeg";
import ip_eb_c from "../img/ip_eb_c.jpeg";
import ip_eb_vc from "../img/ip_eb_vc.jpeg";
import disec_eb_c from "../img/disec_eb_c.jpeg";
import disec_eb_vc from "../img/disec_eb_vc.jpeg";
import Tabs from "react-bootstrap/Tabs";
import { Tab } from "react-bootstrap";

function CommitteePage() {
  const [loading, setLoading] = useState(true);
  const [unhrc_Agenda, setUnhrc_Agenda] = useState(false);
  const [disec_Agenda, setDisec_Agenda] = useState(false);
  const [unfcc_Agenda, setUnfcc_Agenda] = useState(false);

  const [unhrc_Eb, setUnhrc_Eb] = useState(false);
  const [disec_Eb, setDisec_Eb] = useState(false);
  const [unfcc_Eb, setUnfcc_Eb] = useState(false);
  const [ip_Eb, setIp_Eb] = useState(false);

  const [key, setKey] = useState("Chairperson");
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
                <Tabs
                  id="controlled-tab-example"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-2"
                >
                  <Tab eventKey="Chairperson" title="Chairperson">
                    <div className="eb_div">
                      <img className="eb_img" src={unhrc_eb_c} alt="" />
                      <div>
                        <p>Presenting the Chairperson of UNHRC</p>
                        <h2>SHWETANK UPADHYAY</h2>
                        <p>
                          Mr. Shwetank Upadhyay is a 5th year Law undergraduate
                          pursuing his degree from VIPS, IP University. He has
                          been associated with the discourse sector since 2018
                          as an ardent partaker in Model United Nations and
                          Indian Youth Parliaments and henceforth has earmarked
                          himself as a diligent Delegate, proficient Executive
                          Board, and a cogent Secretariat, holding an experience
                          of more than 250 MUNs. His affinity and cognizance
                          towards the world of combat environs is the incentive
                          for him being proclivity for committees dealing with
                          defence and disarmament. With his disciplined yet
                          understanding and motivating ambiance, he's stood to
                          be a fine mentor to seek constructive criticism from
                          everyone present in the room.
                        </p>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="Vice Chairperson" title="Vice Chairperson">
                    <div className="eb_div">
                      <img className="eb_img" src={unhrc_eb_vc} alt="" />
                      <div>
                        <p>Presenting the Vice-Chairperson of UNHRC</p>
                        <h2>NISHANT DASH</h2>
                        <p>
                          A fourth year Medical student at VSS IMSAR, Burla . At
                          twenty one years of age, he has done several MUNs and
                          Youth Parliaments in the past and is also the Founder
                          Deputy Secretary General of the DAV Unite MUN. He
                          specialises in Indian councils since he firmly
                          believes that such forums help him understand the
                          problems existing in the country better.He takes keen
                          interest in foreign affairs.
                        </p>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </Modal.Body>
              {/*<Modal.Body>
                <img className="eb_img" src={unhrc_eb} alt="" />
            </Modal.Body>*/}
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
                <Tabs
                  id="controlled-tab-example"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-2"
                >
                  <Tab eventKey="Chairperson" title="Chairperson">
                    <div className="eb_div">
                      <img className="eb_img" src={disec_eb_c} alt="" />
                      <div>
                        <p>Presenting the Chairperson of UNGA-DISEC</p>
                        <h2>ADITYA SHARMA</h2>
                        <p>
                          Aditya Sharma an unquenchable debator, a Second Year
                          Law Student of Indrapstha University. He has keen
                          interest in Public Policy and Lawmaking. He is Doing
                          MUNs since class 8th and have a great experience of
                          Model United Nations and Youth Parliaments. He has a
                          strong hold in rules of procedures and does create a
                          holistic environment of debate while moderating the
                          Committee. A great researcher and a great debator. He
                          is looking forward to be a part of SIT MUN.
                        </p>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="Vice Chairperson" title="Vice Chairperson">
                    <div className="eb_div">
                      <img className="eb_img" src={disec_eb_vc} alt="" />
                      <div>
                        <p>Presenting the Vice-Chairperson of UNGA-DISEC</p>
                        <h2>PRABHUDHAN SAHU</h2>
                        <p>
                          Mr. Prabhudhan Sahu is a passionate MUNer from Indian
                          Circuit who is currently pursuing his bachelor's
                          Degree in National Institute of Science and
                          Technology, Berhampur. He believes that Combination of
                          hardwork and smoothness will always result in success
                          and satisfaction. He has been a part of MUNing for
                          almost 3 years now which prepend his eminence and
                          exemplary MUNing skills. He believes that "Diplomatic
                          Debate is a supreme art of war where to subdue the
                          enemy without fighting ". He wishes all the
                          participants of SIT MUN the very best and is hopeful
                          it shall be fun and learning experience for everyone.
                        </p>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </Modal.Body>

              {/*<Modal.Body>
                <img className="eb_img" src={disec_eb} alt="" />
            </Modal.Body>*/}
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
                <Tabs
                  id="controlled-tab-example"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-2"
                >
                  <Tab eventKey="Chairperson" title="President">
                    <div className="eb_div">
                      <img className="eb_img" src={unfcc_eb_c} alt="" />
                      <div>
                        <p>Presenting the President of UNFCCC-COP </p>
                        <h2>SATTWIK PATTNAIK</h2>
                        <p>
                          Mr. Sattwik Pattnaik is a MUNer hailing from
                          Bhubaneswar, pursuing his Int. B.Tech M.Tech in
                          Electrical Engineering from VSSUT, Burla. With his
                          awareness & grab on the scenario of the world around
                          us & issues pertaining to the core of mankind, he has
                          been involved in a series of MUN events. He started
                          his MUN career at the age of 15. He is one of the
                          founders of VEER SURENDRA SAI CONFERENCE OF NATIONS,
                          and is currently serving as the Secretary General for
                          the same . He was also an integral part of DAV MUN
                          V3.0. He is really excited to serve as an Executive
                          Board Member in SIT MUN.
                        </p>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="Vice Chairperson" title="Vice-president">
                    <div className="eb_div">
                      <img className="eb_img" src={unfcc_eb_vc} alt="" />
                      <div>
                        <p>Presenting the Vice-president of UNFCCC-COP </p>
                        <h2>SRUSTI NANDA</h2>
                        <p>
                          Shrusti Nanda, a girl of 19, started MUNing 2 years
                          back. She has found MUNs as a marvellous and rewarding
                          opportunity to enhance one's intellect and oratory
                          skills. Apart from being an active participant in MUNs
                          she's also a mental health activist.
                        </p>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </Modal.Body>
              {/*<Modal.Body>
                <img className="eb_img" src={unfcc_eb} alt="" />
            </Modal.Body>*/}
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
                <Tabs
                  id="controlled-tab-example"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-2"
                >
                  <Tab eventKey="Chairperson" title="IP Chief">
                    <div className="eb_div">
                      <img className="eb_img" src={ip_eb_c} alt="" />
                      <div>
                        <p>Presenting the IP Chief</p>
                        <h2>SRIYANSH MOHANTY</h2>
                        <p>
                          Diligent and industrious are two words that one can
                          always associate with Sriyansh, who has an acumen for
                          Indian politics and is well known for his efficiency
                          when it comes to model UN conferences. Currently
                          pursuing his masters in political science from the
                          Central University of Haryana, he is a storehouse of
                          motivation and firmly believes in the contingency
                          theory of leadership. Sriyansh is known for his
                          well-articulated and fact-based articles in MUNs and
                          takes a lot of interest in photography too.
                          International Press has always been his area of
                          interest apart from Indian committees, and he truly
                          believes that a structural reformation in IP is
                          required for people to realize its importance.
                        </p>
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="Vice Chairperson"
                    title="Photographer-In-Chief"
                  >
                    <div className="eb_div">
                      <img className="eb_img" src={ip_eb_vc} alt="" />
                      <div>
                        <p>Presenting the Photographer-In-Chief </p>
                        <h2>OMKAR ANKIT</h2>
                        <p>
                          Omkar Ankit, is a graduate of silicon Institute of
                          technology bhubaneswar from CSE branch 21. Although
                          he's an Engineer, he stays true to his passion and is
                          currently pursuing Filmmaking full time after a
                          successful stint in Infosys last year.Till now he has
                          worked with Redbull, Yellow loop, Aranya nivas
                          etc.Beside that he has also covered live events of
                          National and International artists like Nucleya,Ritviz
                          and Daniel dhers. He is the co-founder of two newly
                          launched creative agencies named Purple Light
                          Entertainment and TBD Which deal with Marketing,
                          creative and Media.He believes in "Pasos cortos,vista
                          larga" meaning short steps,long vision.
                        </p>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </Modal.Body>
              {/*<Modal.Body>
                <img className="agenda_img" src={ip_eb} alt="" />
            </Modal.Body>*/}
            </Modal>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default CommitteePage;
