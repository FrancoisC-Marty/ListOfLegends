/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

import './style.scss';

import champs from '../../data/champs';

const Card = ({ id }: {id:number}) => {
  // @ts-ignore
  const { big_image_url, name } = champs.find((champ) => champ.id === id);

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        transition={{ duration: 0.5, delay: 0.15 }}
        style={{ pointerEvents: 'auto' }}
        className="overlay"
      >
        <div className="card-content-container open">
          <motion.div
            className="card-content"
            layout
            layoutId={`card-container-${id}`}
          >
            <motion.div
              className="card-image-container"
              layout
              layoutId={`card-image-container-${id}`}
            >
              <Link className="card-link" to="/">
                x
              </Link>
              <img
                className="card-image"
                src={big_image_url}
                alt={`grande représentation de ${name}`}
              />
              <div className="card-image-btn" onClick={toggleOpen}>
                {isOpen ? 'Details off' : 'Details on'}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Card;
