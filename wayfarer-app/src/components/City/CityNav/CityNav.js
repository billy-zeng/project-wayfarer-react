import React from 'react';

import './CityNav.css';

class CityNav extends React.Component {

  render(){
    return(
      <div id="city-nav" className="container bg-light col-sm-4 d-flex flex-column align-items-center justify-content-start">
        <div className="p-2 mb-2 container rounded bg-dark row-md-4 text-light d-flex flex-row justify-content-start align-items-center">
          <div>
            <img className="mr-2 rounded city-nav-img" src="https://images.unsplash.com/photo-1496378695585-739a3a44d02d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
          </div>
          <div>
            <h5>San Francisco</h5>
          </div>
        </div>
        <div className="p-2 mb-2 container rounded bg-dark row-md-4 text-light d-flex flex-row justify-content-start align-items-center">
          <div>
            <img className="mr-2 rounded city-nav-img" src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
          </div>
          <div>
            <h5>London</h5>
          </div>
        </div>
        <div className="p-2 mb-2 container rounded bg-dark row-md-4 text-light d-flex flex-row justify-content-start align-items-center">
          <div>
            <img className="mr-2 rounded city-nav-img" src="https://images.unsplash.com/photo-1560452992-e3c28ffc6432?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
          </div>
          <div>
            <h5>Gibraltar</h5>
          </div>
        </div>
        <div className="p-2 mb-2 container rounded bg-dark row-md-4 text-light d-flex flex-row justify-content-start align-items-center">
          <div>
            <img className="mr-2 rounded city-nav-img" src="https://images.unsplash.com/photo-1531335773500-23410807365a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
          </div>
          <div>
            <h5>Seattle</h5>
          </div>
        </div>
        <div className="p-2 mb-2 container rounded bg-dark row-md-4 text-light d-flex flex-row justify-content-start align-items-center">
          <div>
            <img className="mr-2 rounded city-nav-img" src="https://images.unsplash.com/photo-1505245208761-ba872912fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
          </div>
          <div>
            <h5>San Diego</h5>
          </div>
        </div>
        <div className="p-2 mb-2 container rounded bg-dark row-md-4 text-light d-flex flex-row justify-content-start align-items-center">
          <div>
            <img className="mr-2 rounded city-nav-img" src="https://images.unsplash.com/photo-1514510249063-e0faf6c6ec0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
          </div>
          <div>
            <h5>San Antonio</h5>
          </div>
        </div>
      </div>
    );
  };
};

export default CityNav;
