/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './style.scss';

const ChampItem = ({
  image_url,
  name,
  id,
  isSelected,
}: {
  image_url: string,
  name: string,
  id: number,
  isSelected: boolean,
}) => (
  <li className="champitem">
    <Link to={`${id}`} className="champitem-link">
      <motion.div
        className="champitem-img-container"
        layoutId={`card-img-container-${id}`}
      >
        <img className="champitem-img" src={image_url} alt={`miniature de ${name}`} />
      </motion.div>
    </Link>
  </li>
);

ChampItem.propTypes = {
  image_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default ChampItem;
