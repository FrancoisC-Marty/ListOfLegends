/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './style.scss';

import champs from '../../data/champs';

const Card = ({ id }: {id:number}) => {
  // @ts-ignore
  const { big_image_url, name } = champs.find((champ) => champ.id === id);
  return (
    <>
      <Link to="/">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ pointerEvents: 'auto' }}
          className="overlay"
        >
          <div className="card-content-container open">
            <motion.div className="card-content" layoutId={`card-container-${id}`}>
              <motion.div
                className="card-image-container"
                layoutId={`card-image-container-${id}`}
              >
                <img
                  className="card-image"
                  src={big_image_url}
                  alt={`grande représentation de ${name}`}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Card;
