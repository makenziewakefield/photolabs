import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favoritedPhotos, toggleFavorite, handlePhotoClick }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem 
        key={photo.id} 
        photo={photo}
        isFavorite={favoritedPhotos.includes(photo.id)}
        toggleFavorite={toggleFavorite}
        onClick={() => handlePhotoClick(photo)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
