import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ className, onClick}) {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <button className={className} onClick={onClick}></button>
      </div>
    </div>
  );
}

export default PhotoFavButton;