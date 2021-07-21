import React from 'react';
import {Container,Row,Col,Breadcrumb,Form,Button} from 'react-bootstrap';
import Iframe from 'react-iframe';
function Contact() {
    return (
        <section>
            <Container className="container-fluid inner-head">
                <Row>
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
                        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.0689504702!2d80.8724728806252!3d26.848827910883912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1626844081302!5m2!1sen!2sin"
                                width="100%"
                                height="450px"
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h4>Official Address</h4>
                        <p><b>1 Ansah Technologies</b></p>
                        <p>Lucknow, Uttar Pardesh</p>

                        <p><i className="fa fa-phone"></i> +91-9999999999</p>
                        <p><i className="fa fa-envelope"></i> contact@1ansah.in</p>
                    </Col>
                    <Col md={6}>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control type="number" placeholder="Enter Mobile No" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
  }
  export default Contact;