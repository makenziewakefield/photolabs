import React from 'react';
import PhotoDisplay from './PhotoDisplay';
import SimilarPhotosSection from './SimilarPhotoSection';
import ModalHeader from './ModalHeader';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ isOpen, onClose, photo, similarPhotos, isFavorite, toggleFavorite, favoritedPhotos }) => {
  if (!isOpen) return null;

  return (
    <div className="photo-details-modal">
      <ModalHeader onClose={onClose} />
      <div className="photo-details-modal__content">
        <PhotoDisplay
          photo={photo}
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
        />
        <SimilarPhotosSection
          similarPhotos={similarPhotos}
          favoritedPhotos={favoritedPhotos}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
