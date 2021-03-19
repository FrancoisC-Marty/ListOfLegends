/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './style.scss';

const ChampItem = ({
  image,
  name,
  id,
  isSelected,
}: {
  image: {
    full: string,
    sprite: string,
    group: string,
  },
  name: string,
  id: string,
  isSelected: boolean,
}) => (
  <li className="champitem">
    <Link to={`${id}`} className="champitem-link">
      <motion.div
        className="champitem-img-container"
        layoutId={`card-img-container-${id}`}
      >
        <img className="champitem-img" src={image.sprite} alt={`small pic of ${name}`} />
      </motion.div>
    </Link>
  </li>
);

ChampItem.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default ChampItem;
