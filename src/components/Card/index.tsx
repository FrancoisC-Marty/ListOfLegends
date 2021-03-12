/* eslint-disable camelcase */
import React from 'react';

import champs from '../../data/champs';

const Card = ({ id }: {id:number}) => {
  // @ts-ignore
  const { big_image_url, name } = champs.find((champ) => champ.id === id);
  return (
    <div>{id}
      <img src={big_image_url} alt={`grande représentation de ${name}`} />
    </div>
  );
};

export default Card;
