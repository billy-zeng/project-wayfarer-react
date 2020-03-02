import React from 'react';

// Components
import Header from './Header/Header';
import PostList from './PostList/PostList';

// CSS
import './Home.css';

const Home = props => (
  <>
    <Header />
    <PostList />
  </>
);

export default Home;