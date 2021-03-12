import React from 'react';
import { AnimatePresence } from 'framer-motion';

import ChampList from '../ChampList';
import Card from '../Card';

const Content = ({ match }: {match: any}) => {
  let { id } = match.params;
  id = Number(id);
  const imageHasLoaded = true;

  return (
    <>
      <ChampList selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Card id={id} key="item" />}
      </AnimatePresence>
    </>
  );
};
export default Content;
