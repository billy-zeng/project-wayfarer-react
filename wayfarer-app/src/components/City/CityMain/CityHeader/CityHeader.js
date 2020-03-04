import React from 'react';

import './CityHeader.css';

const CityHeader = (props) => {
  return(
    <div className="container mt-5 d-flex flex-row justify-content-start align-items-start">
      <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
        <h4 className="align-self-start">San Francisco</h4>
        <h6 className="align-self-start">United States</h6>
      </div>
      <img className="border rounded city-header-img" src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"/>
    </div>
  );
};

export default CityHeader;