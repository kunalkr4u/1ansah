import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
function Header() {
    return (
      <div>
          <Container>
              <Row>
                  <Col>
                    <h1>Hello</h1>
                  </Col>
                  <Col>
                    <h2>World</h2>
                  </Col>
              </Row>
          </Container>
      </div>
    );
  }
  
  export default Header;