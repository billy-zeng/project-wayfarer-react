import React from 'react';

import CityHeader from './CityHeader/CityHeader';
import CityPosts from './CityPosts/CityPosts';

const CityMain = (props) => {
  return(
    <div className="container d-flex flex-column justify-content-center align-items-center">
    <CityHeader currentCity={props.currentCity} />
    <CityPosts currentCity={props.currentCity} posts={props.cityPosts} />
    </div>
  );
};

export default CityMain;
