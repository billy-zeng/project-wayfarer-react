import React from 'react';

import CityHeader from './CityHeader/CityHeader';
import CityPosts from './CityPosts/CityPosts';


const City = (props) => {
  return(
    <div className="container d-flex flex-column justify-content-center align-items-center">
    <CityHeader/>
    <CityPosts/>
    </div>
  );
};

export default City;