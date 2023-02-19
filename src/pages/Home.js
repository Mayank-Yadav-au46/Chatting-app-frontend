import React from 'react';
import {Row, Col, Button} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';

function Home() {
  return( <Row>
    <Col md={6} className="d-flex color flex-direction-column align-items-center justify-content-center">
        <div>
            <h1>Explore the era with your connections</h1>
            <p>Quick Connect helps you communicate with the world</p>
            <LinkContainer to="/chat">
                <Button variant="success">Let's Begin<i className="fas fa-comments home-message-icon"></i>
                </Button>
                
            </LinkContainer>
        </div>
    </Col>
    <Col md={6} className="home__bg"></Col>
  </Row>
  );
}

export default Home