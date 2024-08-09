import React, { useState } from 'react';
import FavIcon from './FavIcon';
import "../styles/PhotoFavButton.scss";

const PhotoFavIcon = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(prevState => !prevState);
  };

  return (
    <div className="photo-fav-icon" onClick={handleClick}>
      <FavIcon
        selected={isLiked}
        displayAlert={isLiked}
      />
    </div>
  );
};

export default PhotoFavIcon;
