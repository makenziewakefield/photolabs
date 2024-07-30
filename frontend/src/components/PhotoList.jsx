import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favoritedPhotos, toggleFavorite, onPhotoClick }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem 
        key={photo.id} 
        photo={photo}
        isFavorite={favoritedPhotos.includes(photo.id)}
        toggleFavorite={toggleFavorite}
        onClick={() => onPhotoClick(photo)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
