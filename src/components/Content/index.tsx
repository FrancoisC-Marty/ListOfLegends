import React from 'react';
import { AnimatePresence } from 'framer-motion';

import ChampList from '../ChampList';
import Card from '../Card';

import './style.scss';

const Content = ({ match }: {match: any}) => {
  let { id } = match.params;
  id = Number(id);
  const imageHasLoaded = true;

  return (
    <div className="app-container">
      <ChampList selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Card id={id} key="item" />}
      </AnimatePresence>
    </div>
  );
};
export default Content;