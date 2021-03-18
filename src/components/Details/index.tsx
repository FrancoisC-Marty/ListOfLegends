import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import './style.scss';
import rename from '../../utils/rename';

const Details = ({ champ, open }: {
  champ: {
    armor: number,
    armorperlevel: number,
    attackdamage: number,
    attackdamageperlevel: number,
    attackrange: number,
    attackspeedoffset: number,
    attackspeedperlevel: number,
    big_image_url: string,
    crit: number,
    critperlevel: number,
    hp: number,
    hpperlevel: number,
    hpregen: number,
    hpregenperlevel: number,
    id: number,
    image_url: string,
    movespeed: number,
    mp: number,
    mpperlevel: number,
    mpregen: number,
    mpregenperlevel: number,
    name: string,
    spellblock: number,
    spellblockperlevel: number,
    videogame_versions: Array<number>,
  },
  open: boolean,
}) => {
  const stats = [];
  let time = 0.1;
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(champ)) {
    if (key !== 'big_image_url' && key !== 'id' && key !== 'image_url' && key !== 'name' && key !== 'videogame_versions' && key !== 'attackspeedoffset') {
      stats.push({
        property: rename(key),
        value,
        time,
      });

      time += 0.05;
    }
  }
  return (
    <div className="details-container">
      <section className={open ? 'details detailed' : 'details'}>
        <div className="details-title">{`${champ.name}'s Detailed stats`}</div>
        {open && stats.map((stat: {property: string, value: any, time:number}) => (
          <motion.div
            key={stat.property}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            transition={{ duration: 1, delay: stat.time }}
            style={{ pointerEvents: 'auto' }}
            className="details-stat"
          >
            <p className="details-stat__property">{stat.property}</p>
            <p className="details-stat__value">{stat.value}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

Details.propTypes = {
  champ: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Details;
