import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ hasFavorites }) => {

  return (
    <div className={`fav-badge ${hasFavorites ? 'fav-badge--active' : ''}`}>
      <FavIcon displayAlert={hasFavorites} />
    </div>
  )
};

export default FavBadge;