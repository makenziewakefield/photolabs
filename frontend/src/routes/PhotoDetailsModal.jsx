import React from 'react';
import SimilarPhotoSection from 'components/SimilarPhotoSection';
import ModalHeader from 'components/ModalHeader';
import PhotoDisplay from 'components/PhotoDisplay';
import '../styles/PhotoDetailsModal.scss';


// The PhotoDetailsModal component displays the selected photo in a modal
// along with details of the photographer and similar photos.
const PhotoDetailsModal = ({ isOpen, onClose, photo, similarPhotos, isFavorite, toggleFavorite, favoritedPhotos }) => {

  // If the modal is not open, do not render anything
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
        <SimilarPhotoSection
          similarPhotos={similarPhotos}
          favoritedPhotos={favoritedPhotos}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
