import React from 'react';
// Components
import ControlledCarousel from './ControlledCarousel/ControlledCarousel';
import HomeMain from './HomeMain/HomeMain';
// CSS
import './Home.css';

const Home = props => (
  <>
    <div className="d-flex flex-column align-items-center justify-content-center bg-dark">
      <ControlledCarousel />
    </div>
    <HomeMain />
  </>
);

export default Home;
