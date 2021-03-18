/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Details from '../Details';

import './style.scss';

import champs from '../../data/champs';

const Card = ({ id }: {id:number}) => {
  const champ = champs.find((currentChamp) => currentChamp.id === id);
  // @ts-ignore
  const { big_image_url, name } = champ;

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = ():void => setIsOpen(!isOpen);

  useEffect(() => {
    document.title = `List of Legends | ${name}`;
  });

  const handleTitle = ():void => {
    document.title = 'List of Legends';
  };

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
              <div className={isOpen ? 'card-image__gestion--open' : 'card-image__gestion'}>
                <img
                  className="card-image"
                  src={big_image_url}
                  alt={`grande représentation de ${name}`}
                />
                <Link
                  onClick={handleTitle}
                  className="card-link"
                  to="/"
                >
                  x
                </Link>
                <div className="card-image-btn" onClick={toggleOpen}>
                  {isOpen ? 'Details on' : 'Details off'}
                </div>
              </div>
              {/* {isOpen && <Details champ={champ} />} */}
              {/* @ts-ignore */}
              <Details champ={champ} open={isOpen} />
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
