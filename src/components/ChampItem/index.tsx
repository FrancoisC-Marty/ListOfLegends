/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const ChampItem = ({
  image_url,
  name,
}: {
  image_url: string,
  name: string,
}) => (
  <li className="champitem">
    <img src={image_url} alt={`miniature de ${name}`} />
  </li>
);

ChampItem.propTypes = {
  image_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ChampItem;
