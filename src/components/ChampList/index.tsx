import React from 'react';
import PropTypes from 'prop-types';

import ChampItem from '../ChampItem';
import { Champion } from '../../type';

import './style.scss';

const ChampList = ({ champions: champs }: {champions: Array<Champion>}) => (
  <div className="champlist">
    <ul className="champlist-list">
      {champs.map((champ: Champion) => (
        <ChampItem
          {...champ}
        />
      ))}
    </ul>
  </div>
);

ChampList.propTypes = {
  champions: PropTypes.array.isRequired,
};

export default ChampList;
