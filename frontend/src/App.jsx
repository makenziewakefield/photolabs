import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
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
    handleTopicClick
  } = useApplicationData();

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
    </div>
  );
};

export default App;
