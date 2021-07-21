import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
function Footer() {
    return (
        <section>
            <Container className="footer">
                <Row>
                    <Col md={3}>
                        <h4>Official Address</h4>
                        <p><b>1 Ansah Technologies</b></p>
                        <p>Lucknow, Uttar Pardesh</p>

                        <p><i className="fa fa-phone"></i> +91-9999999999</p>
                        <p><i className="fa fa-envelope"></i> contact@1ansah.in</p>
                    </Col>
                    <Col md={3}>
                        <h4>1 Ansah Technologies</h4>
                        <ul>
                            <li><a href="../home"><i className="fa fa-home"></i> Home</a></li>
                            <li><a href="../about"><i className="fa fa-building"></i> About Us</a></li>
                            <li><a href="../career"><i className="fa fa-handshake-o"></i> Career</a></li>
                            <li><a href="../contact"><i className="fa fa-envelope"></i> Contact Us</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                    </Col>
                    <Col md={3}>
                    </Col>
                </Row>
                <Row className="copyright">
                    <Col>
                        &copy; 1 Ansah Technologies
                    </Col>
                </Row>
            </Container>
        </section>
    );
  }
  export default Footer;