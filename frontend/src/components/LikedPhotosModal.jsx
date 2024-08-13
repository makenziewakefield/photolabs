import React from "react";
import PhotoList from "./PhotoList";
import closeSymbol from '../assets/closeSymbol.svg';
import  '../styles/LikedPhotosModal.scss'

const LikedPhotosModal = ({ isOpen, onClose, favoritedPhotos, photoData, toggleFavorite, handlePhotoClick }) => {
  
  if (!isOpen) return null;

  const likedPhotos = photoData.filter(photo => favoritedPhotos.includes(photo.id));

  return (
    <div className="liked-photos-modal">
      <div className="liked-photos-modal__content">
        <button className="liked-photos-modal__close-button" onClick={onClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
        <h2 className="liked-photo-modal__title">Liked Photos</h2>
        {likedPhotos.length > 0 ? (
          <PhotoList
            photos={likedPhotos}
            toggleFavorite={toggleFavorite}
            handlePhotoClick={handlePhotoClick}
            favoritedPhotos={favoritedPhotos}
          />
        ) : (
          <p>No photos liked yet.</p>
        )}
      </div>
    </div>
  );
};

export default LikedPhotosModal;
