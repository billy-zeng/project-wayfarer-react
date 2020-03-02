import React from 'react';

// Components
// import Header from './Header/Header';
import ControlledCarousel from './ControlledCarousel/ControlledCarousel';
import PostList from './PostList/PostList';

// CSS
import './Home.css';

const Home = props => (
  <>
  <div className="d-flex flex-column align-items-center justify-content-center bg-dark">
  <ControlledCarousel />
  </div>
  <PostList />
  </>
);

export default Home;