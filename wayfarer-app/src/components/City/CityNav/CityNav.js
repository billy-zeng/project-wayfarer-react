import React from 'react';

import './CityNav.css';

class CityNav extends React.Component {
  render(){
    console.log(this.props)
    return(
      <div id="city-nav" className="container bg-light col-sm-3 d-flex flex-column align-items-center justify-content-center">
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
              <img className="mr-2 rounded city-nav-img" src="https://images.unsplash.com/photo-1563447216-8950fcd126c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
            </div>
            <div>
              <h5>San Cramento</h5>
            </div>
          </div>
          <div className="p-2 mb-2 container rounded bg-dark row-md-4 text-light d-flex flex-row justify-content-start align-items-center">
            <div>
              <img className="mr-2 rounded city-nav-img" src="https://images.unsplash.com/photo-1576874546753-be5299c1d67b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
            </div>
            <div>
              <h5>San Antonio</h5>
            </div>
          </div>
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
              <img className="mr-2 rounded city-nav-img" src="https://images.unsplash.com/photo-1563447216-8950fcd126c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
            </div>
            <div>
              <h5>San Cramento</h5>
            </div>
          </div>
          <div className="p-2 mb-2 container rounded bg-dark row-md-4 text-light d-flex flex-row justify-content-start align-items-center">
            <div>
              <img className="mr-2 rounded city-nav-img" src="https://images.unsplash.com/photo-1576874546753-be5299c1d67b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
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
