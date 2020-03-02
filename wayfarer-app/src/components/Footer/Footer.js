import React from 'react';
import {Container, Button} from 'react-bootstrap';

const Footer = props => {
  return(
    <footer>
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <div className="d-flex flex-row align-items-center justify-content-center">
          <a className="mr-1 ml-1" href=""><i className="fab fa-facebook-square"></i></a>
          <a className="mr-1 ml-1" href=""><i className="fab fa-twitter-square"></i></a>
          <a className="mr-1 ml-1" href=""><i className="fab fa-instagram-square"></i></a>
        </div>
        <input type="text" placeholder="Email Address"/>
        <Button type="submit">Subscribe</Button>
      </Container>
      <p class="copyright">&copy;2020 Wayfarer</p>
    </footer>
  );
};

export default Footer;