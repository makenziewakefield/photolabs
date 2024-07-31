import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'components/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const App = () => {
  const {
    state: { isModalOpen, selectedPhoto, similarPhoto, favoritedPhotos },
    toggleFavorite,
    setPhotoSelected,
    handleCloseModal,
    handlePhotoClick
  } = useApplicationData();

  const isFavorite = selectedPhoto ? favoritedPhotos.includes(selectedPhoto.id) : false;

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
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
