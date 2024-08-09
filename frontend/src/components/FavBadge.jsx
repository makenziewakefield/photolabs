import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ hasFavorites }) => {

  return (
    <div className={`fav-badge ${hasFavorites ? 'fav-badge--active' : ''}`}>
      <FavIcon selected={hasFavorites} />
      {hasFavorites && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fav-badge__circle"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="21" cy="4" r="2.75" fill="#00FF00" stroke="#FFFFFF" strokeWidth="0.5" />
        </svg>
      )}
    </div>
  )
};

export default FavBadge;