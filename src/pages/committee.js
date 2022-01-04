import React from "react";
import '../css/committee.css';
import bgimg from '../img/bgcommittee.png';
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
                    <img src="https://source.unsplash.com/user/erondu/320x480" alt="Avatar" />
                    <div className="text1"><h3><b>SIT MUN</b></h3></div>
                    {/* <div className="card-container">
                        <div className="text">Hello World</div>
                    </div> */}
                </div>

                <div className="card1">
                    <img src="https://source.unsplash.com/user/erondu/320x480" alt="Avatar" />
                    <div className="text1"><h3><b>SIT MUN</b></h3></div>
                    {/* <div className="card-container">
                        <div className="text">Hello World</div>
                    </div> */}
                </div>

                <div className="card1">
                    <img src="https://source.unsplash.com/user/erondu/320x480" alt="Avatar" />
                    <div className="text1"><h3><b>SIT MUN</b></h3></div>
                    {/* <div className="card-container">
                        <div className="text">Hello World</div>
                    </div> */}
                </div>

            </Container>
            <Footer />
        </div>
    );
}


export default CommitteePage;