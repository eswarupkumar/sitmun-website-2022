import React from "react";
import '../css/committee.css';
import bgimg from '../img/bgcommittee.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function CommitteePage() {
    return (
        <>
            <div className="bg">
                <img src={bgimg} alt="" />
                <h2>Committees</h2>
                <p>"A group who keep minutes and waste hours."</p>
            </div>

            

            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col>
                        <div class="card1">
                            <img src="https://source.unsplash.com/user/erondu/320x480" alt="Avatar" />
                            <div className="text1"><h3><b>SIT MUN</b></h3></div>
                            <div className="container">
                                <div className="text">Hello World</div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </>
    );
}


export default CommitteePage;