import React from 'react';
import {Container,Row,Col,Breadcrumb} from 'react-bootstrap';
function Contact() {
    return (
        <section>
            <Container className="container-fluid inner-head">
                <Row >
                    <Col>
                    <h2>Contact Us</h2>
                    <Breadcrumb className="nav justify-content-center">
                        <Breadcrumb.Item href="../"><i className="fa fa-home"></i> Home</Breadcrumb.Item>
                        <Breadcrumb.Item active><i className="fa fa-envelope"></i> Contact Us</Breadcrumb.Item>
                    </Breadcrumb>
                    </Col>
                </Row>
            </Container>
            <Container className="inner-body">
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </section>
    );
  }
  
  export default Contact;