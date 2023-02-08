import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={4} md={4}>
    <a href="https://www.iftiinhub.pro/">
          <img
            src="./return.png"
            className="headerimg"
            alt=""
          />
              </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
