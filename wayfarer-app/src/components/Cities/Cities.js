import React from 'react';

import CityNav from './CityNav/CityNav';
import City from './City/City';

const Cities = (props) => {
  return(
    <div className="container d-flex flex-row justify-content-center align-items-center">
      <CityNav className="col-md-2 d-flex flex-row justify-content-center align-items-center"/>
      <City className="col-md-10 d-flex flex-column justify-content-center align-items-center"/>
    </div>
  );
};

export default Cities;