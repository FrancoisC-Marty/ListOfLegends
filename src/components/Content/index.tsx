import React from 'react';
import { AnimatePresence } from 'framer-motion';

import ChampList from '../ChampList';
import Card from '../Card';
import NotFound from '../NotFound';

import champs from '../../data/champions';

import './style.scss';

const Content = ({ match }: {match: any}) => {
  const { id } = match.params;
  const imageHasLoaded = true;

  const ids: Array<string> = [];

  champs.forEach((champ) => ids.push(champ.id));

  const notFound: boolean = !ids.includes(id);

  return (
    <div className="app-container">
      <ChampList selectedId={id} />
      <AnimatePresence>
        {id && !notFound && imageHasLoaded && <Card id={id} key="item" />}
        {id && notFound && <NotFound id={id} />}
      </AnimatePresence>
    </div>
  );
};
export default Content;
