import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import Home from './Home';
import About from './About';
import Career from './Career';
import Contact from './Contact';
import logo from '../components/images/logo.webp';
import {Container,Row,Col} from 'react-bootstrap';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
  let home="/home";
const Menu=()=>{
    return(
		<Router>
			<Container className="toparea">
                <Row>
                    <Col>
                        <Navbar.Brand as={Link} to={home}><img src={logo} alt="logo"/></Navbar.Brand>
                    </Col>
                    <Col>
                        <Navbar expand="lg" className="nav justify-content-end">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link as={Link} to={"/home"}><i className="fa fa-home"></i> Home</Nav.Link>
                                <Nav.Link as={Link} to={"/about"}><i className="fa fa-building"></i> About Us</Nav.Link>
                                <Nav.Link as={Link} to={"/career"}><i className="fa fa-handshake-o"></i> Career</Nav.Link>
                                <Nav.Link as={Link} to={"/contact"}><i className="fa fa-envelope"></i> Contact Us</Nav.Link>
                            </Nav>
                            
                        </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
            
            <Container fluid>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/career">
                        <Career />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Container>
		</Router>
    );
}

export default Menu;