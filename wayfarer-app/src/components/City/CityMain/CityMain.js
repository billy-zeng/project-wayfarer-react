import React from 'react';

import CityHeader from './CityHeader/CityHeader';
import CityPosts from './CityPosts/CityPosts';

const CityMain = (props) => {
  // return(
  //   <div className="container d-flex flex-row justify-content-center align-items-center">
  //     {/* <CityNav className="col-md-2 d-flex flex-row justify-content-center align-items-center"/> */}
  //     <City className="col-md-10 d-flex flex-column justify-content-center align-items-center"/>
  //   </div>
  // );
  return(
    <div className="container d-flex flex-column justify-content-center align-items-center">
    <CityHeader/>
    <CityPosts/>
    </div>
  );
};

export default CityMain;
