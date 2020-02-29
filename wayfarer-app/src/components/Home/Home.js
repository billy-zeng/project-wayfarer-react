import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import './Home.css';

const Home = () => (
  <>
    <Jumbotron className="hero-jumbotron">
      <Container>
        <h1>Welcome to Wayfarer</h1>
        <p>
          Wayfarer is a social space for people to share experiences from their favorites cities.
        </p>
      </Container>
    </Jumbotron>
  </>
);

export default Home;