import React from "react";
import UnderLine from "../common/UnderLine";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../css/whychooseus.css";
function WhyChooseUs() {
  return (
    <div className="WhyChooseUs">
      <div className="WhyChooseUs__body container-fluid">
        <Container>
          <Row >
            <Col className="Col_1" xs={6} md={4}>
              <Card className="bg-dark text-white">
                {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
                <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col className="Col_2"  xs={12} md={8} lg={6}>
              <Card className="bg-dark text-white">
                {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
                <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
          <div className="WhyChooseUs__heading">
            <h2>WHY SHOULD YOU CHOOSE US?</h2>
            {/* <UnderLine /> */}
          </div>
          <Row>
            <Col className="Col_3" xs={12} md={8} lg={6}>
              <Card className="bg-dark text-white">
                {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
                <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col className="Col_4" xs={6} md={4}>
              <Card className="bg-dark text-white">
                {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
                <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default WhyChooseUs;
