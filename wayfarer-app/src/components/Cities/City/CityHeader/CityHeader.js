import React from 'react';

import './CityHeader.css';

const CityHeader = (props) => {
  return(
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <img className="city-header-img" src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"/>
      <h4 className="align-self-start">San Francisco</h4>
    </div>
  );
};

export default CityHeader;