import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ photoId, isFavorite, toggleFavorite }) => {

  const handleClick = () => {
    toggleFavorite(photoId);
  };

  return (
    <button className='photo-fav-button' onClick={handleClick}>
      <FavIcon selected={isFavorite} />
    </button>
  );
};

export default PhotoFavButton;