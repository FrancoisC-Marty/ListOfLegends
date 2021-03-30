/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';

import './style.scss';

const Footer = () => (
  <div className="footer">
    <p className="footer-created">Made with passion and <a
      className="footer-created-link"
      href="https://www.riotgames.com/"
    >Riot Games
    </a>
    </p>
    <p className="footer-created">API and front developped by <a
      className="footer-created-link"
      href="https://github.com/FrancoisC-Marty"
    >Elasnael
    </a> © 2021
    </p>
  </div>
);

export default Footer;
