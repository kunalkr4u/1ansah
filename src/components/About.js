import React from 'react';
import {Container,Row,Col,Breadcrumb} from 'react-bootstrap';
import './Inner.css';
function About() {
    return (
      <section>
          <Container className="container-fluid inner-head">
              <Row >
                  <Col>
                    <h2>About Us</h2>
                    <Breadcrumb className="nav justify-content-center">
                        <Breadcrumb.Item href="../"><i className="fa fa-home"></i> Home</Breadcrumb.Item>
                        <Breadcrumb.Item active><i className="fa fa-building"></i> About Us</Breadcrumb.Item>
                    </Breadcrumb>
                  </Col>
              </Row>
          </Container>
          <Container className="inner-body">
                <Row>
                    <Col>
                        <h2>Who We Are</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>We are working on Artificial Intelligences projects. Company clients will be from the following sectors :</p>
                        <ul>
                            <li>Aviation</li>
                            <li>Power</li>
                            <li>Defence</li>
                            <li>Utilities</li>
                            <li>Shipping</li>
                        </ul>
                        <p>We started the company in Uttar Pradesh, Lucknow as we see the protentional of Uttar Pradesh and the concept of Uttam Pradesh.  Our moto is to <b>"Take the skilled youth to steps ahead in the field of Information Technology with Artificial Intelligence"</b>. We will work for Digital India. 
    </p>
                    </Col>
                </Row>
          </Container>
      </section>
    );
  }
  
  export default About;