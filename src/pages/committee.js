import React from "react";
import '../css/committee.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function CommitteePage() {
    return (
        <>
            <div className="bg">
                <h1>Committees</h1>
                <p>"A group who keep minutes and waste hours."</p>
            </div>

            <div >
            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col>
                        <Card border="primary" className='card' style={{"border-radius": "20px"}}>
                            <Card.Img src="https://source.unsplash.com/user/erondu/600x800" />
                            <Card.Footer>
                                <small className="text-muted">Some text here</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
            </div>

        </>
    );
}


export default CommitteePage;