import React from 'react';
import './App.scss';
import HomeRoute from 'components/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

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
    handlePhotoClick
  } = useApplicationData();

  const isFavorite = selectedPhoto ? favoritedPhotos.includes(selectedPhoto.id) : false;

  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
        handlePhotoClick={handlePhotoClick}
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
