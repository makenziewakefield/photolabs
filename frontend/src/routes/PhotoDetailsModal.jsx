import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ isOpen, onClose, photo, similarPhotos }) => {
  console.log('Selected photo data:', photo);

  if (!isOpen) return null;

  const similarPhotosArray = Object.values(similarPhotos);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__content">
        {photo ? (
          <>
            <img
              src={photo.urls.regular}
              alt={photo.description || 'Selected photo'}
              className="photo-details-modal__image"
            />
            <div className="photo-details-modal__photographer-details">
            <img
                src={photo.user.profile}
                alt={photo.user.name}
                className="photo-details-modal__photographer-profile"
              />
              <div className="photo-details-modal__user-details">
                <div className="photo-details-modal__photographer-info">{photo.user.name}</div>
                <div className="photo-details-modal__photographer-location">
                  {photo.location.city}, {photo.location.country}
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>No photo data available</p>
        )}
        <h3 className='photo-details-modal_similar-photos'>Similar Photos</h3>
        {similarPhotosArray.length > 0 ? (
          <PhotoList
            photos={similarPhotosArray}
            favoritedPhotos={[]}
            toggleFavorite={() => {}}
            onPhotoClick={() => {}}
          />
        ) : (
          <p>No similar photos available</p>
        )}
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
