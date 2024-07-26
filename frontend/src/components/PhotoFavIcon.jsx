import React, { useState } from 'react';
import PhotoFavButton from './PhotoFavButton';
import FavIcon from './FavIcon';
import "../styles/PhotoFavButton.scss";

const PhotoFavIcon = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(prevState => !prevState);
    console.log(isLiked ? 'Photo unliked' : 'Photo liked');
  };

  return (
    <div className="photo-fav-icon" onClick={handleClick}>
      <FavIcon
        selected={isLiked}
        displayAlert={isLiked} // Display alert if the photo is liked
      />
    </div>
  );
};

export default PhotoFavIcon;
