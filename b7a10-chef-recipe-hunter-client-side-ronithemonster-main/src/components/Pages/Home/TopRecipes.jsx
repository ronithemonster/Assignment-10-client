import React from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";
import "../../../assets/pasa.css";

const TopRecipes = () => {
    return (
        <div className='  '>
        <h5 className="text-center mt-5 mb-5 "> Top Recipes All over the World </h5>
        <div>
          <Container>
            <Row className="">
              <Col lg={4} >
                {" "}
                <Card  className="mx-auto shadow"  style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1XO_ShIwsqC12uOgXG_wqBJgpXSj4uuQbqQ&usqp=CAU"
                  />
                  <Card.Body>
                    <Card.Title>Udon</Card.Title>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={4}>
                <Card className="mx-auto shadow" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDCl1aKZ9f2XfDxrOUPIoAAspr4yZD-y2r4A&usqp=CAU"
                  />
                  <Card.Body>
                    <Card.Title>Strawberry Cheesecake</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="mx-auto shadow" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8v1kya_F2ezNy3vDZ6qDY654ZIcqxd0Mzu3HXTk1-Y0_7YeCyxPwjck5cnabz_ispAtI&usqp=CAU"
                  />
                  <Card.Body>
                    <Card.Title>Okonomiyaki</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
             
             
            </Row>
          </Container>
        </div>
      </div>
    );
};

export default TopRecipes;