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
                    <Col md={6}>
                        <h4>Official Address</h4>
                        <p><b>1 Ansah Technologies</b></p>
                        <p>Lucknow, Uttar Pardesh</p>

                        <p><i className="fa fa-phone"></i> +91-9999999999</p>
                        <p><i className="fa fa-envelope"></i> contact@1ansah.in</p>
                    </Col>
                    <Col md={6}>
                    </Col>
                </Row>
            </Container>
        </section>
    );
  }
  export default Contact;