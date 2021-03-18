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
  let stats = {};
  let time = 0.15;
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(champ)) {
    if (key !== 'big_image_url' && key !== 'id' && key !== 'image_url' && key !== 'name' && key !== 'videogame_versions') {
      stats = { ...stats, [rename(key)]: value };

      time += 0.1;
    }
  }

  console.log(stats);
  return (
    <div className="details-container">
      <div className={open ? 'details detailed' : 'details'}>
        <div className="details-title">details</div>
      </div>
    </div>
  );
};

Details.propTypes = {
  champ: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Details;
