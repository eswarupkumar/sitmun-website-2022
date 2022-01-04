import React from "react";
import '../css/committee.css';
import bgimg from '../img/bgcommittee.png';
import disec from '../img/DISEC.png';
import unfccc from '../img/UNFCCC.png';
import unhrc from '../img/UNHRC.png';
import Navbar from "../components/common/navbar";
import Footer from "../components/common/Footer";
import ScrollTop from "../components/common/ScrollTop";
import { Row,Col,Container } from "react-bootstrap";


function CommitteePage() {
    return (
        <div>
            <Navbar />  
            <ScrollTop />
            <section className='heroeb' >
                <Row>
                    <Col>
                    <Container fluid>
                    <div className="row">
                    
                    <div className="col-sm-6 d-flex align-item-center justify-content-center">
                        <img className='img-fluid' id="imgbg" src={bgimg} alt=""></img>
                    </div>
                    <div className="col-sm-6 d-flex flex-column text-center align-item-center justify-content-center">
                        <div className="headerText">Committees </div>
                        <div className="taglineText">"A group who keep minutes and waste hours."</div>  
                    </div>
                    </div>
                    </Container>
                    </Col>
                </Row>
            
            </section>

            <Container className="flex">
                <div className="card1">
                    <center><img src={disec} alt="" /></center>
                    <div className="text1"><h3><b>DISEC</b></h3></div>
                    <div className="card-container">
                        <div className="text">
                            The very idea of humanity creating methodologies to protect their sovereignty 
                            as had come across numerous changes. Now we reside in the age where nuclear 
                            power, space technology and bioweapons are the imminent threat to the mortal 
                            existence on the planet. As is the truth, every coin has two sides, so does 
                            this situation, thus their needs to be a mechanism which ensures the safety.
                        </div>
                    </div>
                </div>

                <div className="card1">
                    <img src={unhrc} alt="Avatar" />
                    {/* <div className="text1"><h3><b>SIT MUN</b></h3></div> */}
                    <div className="card-container">
                        <div className="text">
                            Human rights are an innate virtue that we all should possess and have for the utility. 
                            Since the dawn of civilization, numerous ideologies and political revolutions have led 
                            to a dire circumstance in matters of human rights. Ranging from the refugee crisis to 
                            the poverty issues, many lives have been subjugated to utter disdain, to tackle this 
                            issue, UNHRC was established.
                        </div>
                    </div>
                </div>

                <div className="card1">
                    <center><img src={unfccc} alt="Avatar" /></center>
                    {/* <div className="text1"><h3><b>SIT MUN</b></h3></div> */}
                    <div className="card-container">
                        <div className="text">
                            It is a matter of grave concern, that a majority chunk of the current day modern 
                            world has forgot that they aren’t the only ones residing. In a way utterly 
                            dreadful alterations have been implicated upon the world climate. Issues like 
                            global warming and rise in natural disasters seem to have become the new normal.
                        </div>
                    </div>
                </div>

            </Container>
            <Footer />
        </div>
    );
}


export default CommitteePage;