import React from 'react';

import ChampItem from '../ChampItem';

import './style.scss';

import champs from '../../data/champs';

const ChampList = () => (
  <div className="champlist">
    <ul className="champlist-list">
      {champs.map((champ) => (
        <ChampItem key={champ.id} {...champ} />
      ))}
    </ul>
  </div>
);

export default ChampList;
