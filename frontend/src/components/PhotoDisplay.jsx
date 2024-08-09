import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import '../styles/PhotoDisplay.scss';


// The PhotoDisplay component renders within the MODAL (PhotoDetailsModal)
const PhotoDisplay = ({ photo, isFavorite, toggleFavorite }) => {

  if (!photo) return <p>No photo data available</p>;

  return (
    <div className="photo-display">
      <PhotoFavButton
        photoId={photo.id}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
        className="photo-fav-button photo-display__fav-button"
      />
      <img
        src={photo.urls.regular}
        alt={photo.description || 'Selected photo'}
        className="photo-display__image"
      />
      <div className="photo-display__photographer-details">
        <img
          src={photo.user.profile}
          alt={photo.user.name}
          className="photo-display__photographer-profile"
        />
        <div className="photo-display__user-details">
          <div className="photo-display__photographer-info">{photo.user.name}</div>
          <div className="photo-display__photographer-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDisplay;
