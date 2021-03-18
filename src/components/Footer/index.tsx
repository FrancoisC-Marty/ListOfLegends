import React from 'react';

import './style.scss';

const Footer = () => (
  <div className="footer">
    <p className="footer-created">Made with passion and <a
      className="footer-created-link"
      href="https://developers.pandascore.co/"
    >PandaScore
      {/* eslint-disable-next-line react/jsx-closing-tag-location */}
    </a>
    </p>
    <p className="footer-created">Developped by <a
      className="footer-created-link"
      href="https://github.com/FrancoisC-Marty"
    >Elasnael
      {/* eslint-disable-next-line react/jsx-closing-tag-location */}
    </a> © 2021
    </p>
  </div>
);

export default Footer;
