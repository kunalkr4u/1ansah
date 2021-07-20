import React from 'react';
import {Carousel,Container,Row,Col} from 'react-bootstrap';
import './Home.css'
const Home=()=>{
    return(
        <Container>
        <Row>
            
                <Carousel fade>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://static.wixstatic.com/media/f7133f9895b24525a2ad16c1e778c9fa.jpg/v1/fill/w_1298,h_635,al_l,q_85,usm_0.66_1.00_0.01/f7133f9895b24525a2ad16c1e778c9fa.webp"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3> </h3>
                            <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://static.wixstatic.com/media/d80370_f401f2f83a5043e18a65eb18cb9764e1~mv2.jpeg/v1/fill/w_1280,h_626,al_c,q_85/d80370_f401f2f83a5043e18a65eb18cb9764e1~mv2.webp"
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3> </h3>
                            <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://static.wixstatic.com/media/d80370_07008c99e1b54305bbabe39eee51bfbe~mv2.png/v1/fill/w_1298,h_635,al_c,q_90,usm_0.66_1.00_0.01/d80370_07008c99e1b54305bbabe39eee51bfbe~mv2.webp"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3> </h3>
                            <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://static.wixstatic.com/media/d80370_b1bafb435e724e4fa80af44824957088~mv2_d_1920_1200_s_2.jpg/v1/fill/w_1298,h_635,al_c,q_85,usm_0.66_1.00_0.01/d80370_b1bafb435e724e4fa80af44824957088~mv2_d_1920_1200_s_2.webp"
                            alt="Fourth slide"
                            />

                            <Carousel.Caption>
                            <h3> </h3>
                            <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://static.wixstatic.com/media/d80370_0bbaed7918384797bb5b3229a370c18f~mv2_d_5120_2880_s_4_2.jpg/v1/fill/w_1298,h_635,al_c,q_85,usm_0.66_1.00_0.01/d80370_0bbaed7918384797bb5b3229a370c18f~mv2_d_5120_2880_s_4_2.webp"
                            alt="Fifth slide"
                            />

                            <Carousel.Caption>
                            <h3> </h3>
                            <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
           
        </Row>
        <section className="about">
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
        </section>
           
        </Container>
       
    );
}

export default Home;