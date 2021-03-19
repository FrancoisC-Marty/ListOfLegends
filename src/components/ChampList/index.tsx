import React from 'react';
import PropTypes from 'prop-types';

import ChampItem from '../ChampItem';

import './style.scss';

import champs from '../../data/champions';

const ChampList = ({ selectedId }: {selectedId: number}) => (
  <div className="champlist">
    <ul className="champlist-list">
      {champs.map((champ) => (
        <ChampItem
          // key={champ.id}
          {...champ}
          isSelected={Number(champ.id) === selectedId}
        />
      ))}
    </ul>
  </div>
);

ChampList.propTypes = {
  selectedId: PropTypes.number.isRequired,
};

export default ChampList;
