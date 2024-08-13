import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import LikedPhotosModal from 'components/LikedPhotosModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {
    state: {
      isModalOpen,
      selectedPhoto,
      similarPhoto,
      favoritedPhotos,
      photoData,
      topicData,
    },
    toggleFavorite,
    handleCloseModal,
    handlePhotoClick,
    handleTopicClick,
  } = useApplicationData();

  // State for liked photos modal
  const [isLikedPhotosModalOpen, setLikedPhotosModalOpen] = useState(false);

   // Handle clicking on the favorites icon
   const handleFavIconClick = () => {
    setLikedPhotosModalOpen(!isLikedPhotosModalOpen);
  };

  // Determine if the currently selected photo is marked as a favorite.
  const isFavorite = selectedPhoto ? favoritedPhotos.includes(selectedPhoto.id) : false;

  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
        handlePhotoClick={handlePhotoClick}
        handleTopicClick={handleTopicClick}
        favoritedPhotos={favoritedPhotos}
        toggleFavorite={toggleFavorite}
        handleFavIconClick={handleFavIconClick}
      />
      <PhotoDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        photo={selectedPhoto}
        similarPhotos={similarPhoto}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
        favoritedPhotos={favoritedPhotos}
      />
      <LikedPhotosModal
        isOpen={isLikedPhotosModalOpen}
        onClose={() => setLikedPhotosModalOpen(false)}
        favoritedPhotos={favoritedPhotos || []}
        photoData={photoData}
        toggleFavorite={toggleFavorite}
        handlePhotoClick={handlePhotoClick}
        handleFavIconClick={handleFavIconClick}
      />
    </div>
  );
};

export default App;
