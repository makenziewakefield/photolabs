import React from 'react';
import PhotoList from 'components/PhotoList';
import '../styles/SimilarPhotoSection.scss';

// Renders within the MODAL (PhotoDetailsModal)
const SimilarPhotosSection = ({ similarPhotos, favoritedPhotos, toggleFavorite }) => {

  const similarPhotosArray = Object.values(similarPhotos);

  return (
    <div className="similar-photos-section">
      <h3 className='similar-photos-section__title'>Similar Photos</h3>
      {similarPhotosArray.length > 0 ? (
        <PhotoList
          photos={similarPhotosArray}
          favoritedPhotos={favoritedPhotos}
          toggleFavorite={toggleFavorite}
          onPhotoClick={() => { }}
        />
      ) : (
        <p>No similar photos available</p>
      )}
    </div>
  );
};

export default SimilarPhotosSection;
