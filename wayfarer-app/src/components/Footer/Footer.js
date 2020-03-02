import React from 'react';
import {Container, Button} from 'react-bootstrap';

import './Footer.css'
;
const Footer = props => {
  return(
    <footer className="d-flex flex-column align-items-center justify-content-center">
      <Container className="d-flex flex-column align-items-center justify-content-center p-1">
        <div className="d-flex flex-row align-items-center justify-content-center p-1">
          <a className="mr-1 ml-1" href=""><i className="text-dark fab fa-facebook-square"></i></a>
          <a className="mr-1 ml-1" href=""><i className="text-dark fab fa-twitter-square"></i></a>
          <a className="mr-1 ml-1" href=""><i className="text-dark fab fa-instagram-square"></i></a>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-center p-1">
        <input type="text" placeholder="Email Address"/>
        <Button className="btn-dark" type="submit">Subscribe</Button>
        </div>
      </Container>
      <p className="copyright">&copy;2020 Wayfarer</p>
    </footer>
  );
};

export default Footer;