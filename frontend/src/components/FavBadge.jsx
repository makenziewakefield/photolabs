import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ favoritedPhotos }) => {

  const hasFavorites = favoritedPhotos.length > 0;
  return (
    <div className={`fav-badge ${hasFavorites ? 'fav-badge--active' : ''}`}>
      <div className='fav-badge'>
        <FavIcon displayAlert={hasFavorites} />
      </div>
    </div>
  )
};

export default FavBadge;