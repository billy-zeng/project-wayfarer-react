import React from 'react';
import {Container, Button} from 'react-bootstrap';

const Footer = props => {
  return(
    <footer>
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <div className="d-flex flex-row align-items-center justify-content-center">
          <a href=""><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
          <a href=""><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
          <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
        </div>
        <input type="text" placeholder="Email Address"/>
        <Button type="submit">Subscribe</Button>
      </Container>
      <p class="copyright">&copy;2020 Wayfarer</p>
    </footer>
  );
};

export default Footer;