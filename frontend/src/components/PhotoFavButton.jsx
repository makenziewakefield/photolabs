import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [favouritePhoto, setFavouritePhoto] = useState(false);

  const handleClick = () => {
    setFavouritePhoto(prev => !prev);
    console.log(favouritePhoto ? 'Photo unliked' : 'Photo liked');
  };

  return (
    <button className='photo-fav-button' onClick={handleClick}>
      <FavIcon selected={favouritePhoto} />
    </button>
  );
};

export default PhotoFavButton;