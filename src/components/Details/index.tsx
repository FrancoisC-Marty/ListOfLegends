import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import './style.scss';
import rename from '../../utils/rename';

const Details = ({
  details,
  open,
  name,
  title,
  lore,
}: {
  details: {
    armor: number,
    armorperlevel: number,
    attackdamage: number,
    attackdamageperlevel: number,
    attackrange: number,
    attackspeed: number,
    attackspeedperlevel: number,
    crit: number,
    critperlevel: number,
    hp: number,
    hpperlevel: number,
    hpregen: number,
    hpregenperlevel: number,
    movespeed: number,
    mp: number,
    mpperlevel: number,
    mpregen: number,
    mpregenperlevel: number,
    spellblock: number,
    spellblockperlevel: number,
  },
  open: boolean,
  name: string,
  title: string,
  lore: string,
}) => {
  const statsArray = [];
  let time = 0.1;
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(details)) {
    statsArray.push({
      property: rename(key),
      value,
      time,
    });

    time += 0.05;
  }

  const [isLore, setIsLore] = useState(false);

  const handleLore = ():void => {
    setIsLore(!isLore);
  };

  return (
    <div className="details-container">
      <section className={open ? 'details detailed' : 'details'}>
        <h1 className="details-title">{`${name}'s Details`}</h1>
        {open && !isLore && statsArray.map((stat: {property: string, value: any, time:number}) => (
          <motion.div
            key={stat.property}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.5, delay: stat.time }}
            style={{ pointerEvents: 'auto' }}
            className="details-stat"
          >
            <p className="details-stat__property">{stat.property}</p>
            <p className="details-stat__value">{stat.value}</p>
          </motion.div>
        ))}
        {open && isLore && (
          <div className="details-lore">
            <motion.h2
              className="details-lore-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {name} {title}
            </motion.h2>
            <motion.p
              className="details-lore-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {lore}
            </motion.p>
          </div>
        )}
        {open && (
          <motion.div
            className="details-btn"
            onClick={handleLore}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {!isLore ? 'Lore' : 'Stats'}
          </motion.div>
        )}
      </section>
    </div>
  );
};

Details.propTypes = {
  details: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lore: PropTypes.string.isRequired,
};

export default Details;
