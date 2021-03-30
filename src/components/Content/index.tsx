/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { Wave } from 'react-css-spinners';

import ChampList from '../ChampList';
import Card from '../Card';
import NotFound from '../NotFound';

import { Champion } from '../../type';

import './style.scss';

const Content = ({ match }: {match: any}) => {
  const { id } = match.params;
  const imageHasLoaded = true;

  const ids: Array<string> = [];

  const [champs, setChamps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api-listoflegends.herokuapp.com/api/champion/')
      .then((response) => {
        setChamps(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (champs.length > 0) {
    champs.forEach((champ: Champion) => ids.push(champ.id));
  }

  const notFound: boolean = !ids.includes(id);

  return (
    <div className="app-container">
      {isLoading && (
        <div className="loading">
          <Wave color="#40d2f7" />
        </div>
      )}
      {!isLoading && <ChampList champions={champs} />}
      <AnimatePresence>
        {id && !notFound && imageHasLoaded && <Card champions={champs} id={id} key="item" />}
        {id && notFound && <NotFound id={id} />}
      </AnimatePresence>
    </div>
  );
};
export default Content;
