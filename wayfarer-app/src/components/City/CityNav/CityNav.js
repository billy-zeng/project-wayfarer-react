import React from 'react';

const CityNav = (props) =>{
  return(
    <>
    <div id="city-nav" className="col-sm-3 d-flex flex-column align-items-center justify-content-start">
        <a className="row-md-4 btn btn-dark text-light d-flex flex-row justify-content-start align-items-center"><i class="fas fa-user"></i>San Francisco</a>
        <a className="row-md-4 btn btn-dark text-light d-flex flex-row justify-content-start align-items-center"><i class="fas fa-comment-alt"></i>Moscow</a>
        <a className="row-md-4 btn btn-dark text-light d-flex flex-row justify-content-start align-items-center"><i class="far fa-edit"></i>Gibraltar</a>
    </div>
    </>
  );
};

export default CityNav;