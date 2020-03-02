import React from 'react';

import './Header.css';

const Header = props => {
  return(
    <header className="d-flex flex-column align-items-center justify-content-center">
      <div className="d-flex flex-column align-items-center justify-content-bottom">
        <h1 className="text-light">Wayfarer</h1>
        <h2 className="text-light">The Amazing Community Travel Blog</h2>
      </div>
    </header>
  );
};

export default Header;