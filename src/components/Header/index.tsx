import React from 'react';

import Logo from '../../assets/images/ListofLegendsLee.jpg';

import './style.scss';

const Header = () => (
  <div className="header">
    {/* <h1 className="header-title">List of Legends</h1> */}
    <img className="header-logo" src={Logo} alt="logo du site - List of Legends" />
  </div>
);

export default Header;
