import React from 'react';
import AppBar from 'material-ui/AppBar';
import './styles.css';

const Header = () => {
  return (
    <AppBar
      title="Get News"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      className="header-container"
    />
    // <header className="header-container">
    //   <h1 className="header-title-left">Tech News</h1>
    // </header>
  );
}

export default Header;
